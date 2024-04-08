import * as cheerio from 'cheerio';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import { Metadata, ResolvingMetadata } from 'next';

import styles from './page.module.css';

import { getBlog } from '@/app/lib/apis/getBlog';
import { Blog } from '@/app/types/blogs';
import TableOfContents from '@/app/ui/TableOfContents';

import 'highlight.js/styles/hybrid.css';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);

type PlainBlogDetailProps = {
  blog: Blog;
  headings: {
    tagName: string;
    id: string;
    text: string | undefined;
  }[];
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const blog = await getBlog(params.id);
  const previousImages = (await parent).openGraph?.images || [];
  const description = `${blog.metaDescription}…`;

  return {
    title: blog.title,
    description,
    twitter: {
      description,
      images: [...previousImages],
    },
    openGraph: {
      images: [...previousImages],
      description,
    },
  };
}

// コンテンツのダウンロードに時間がかかり過ぎているのでchakra-uiを剥がした
const PlainBlogDetail = ({ blog, headings }: PlainBlogDetailProps) => (
  <div className={styles['p-content-detail']}>
    <div className={styles['p-content-detail__article']}>
      <div className={styles['p-content-detail__article-title-wrapper']}>
        <h1 className={styles['p-content-detail__article-title']}>{blog.title}</h1>
        <div className={styles['p-content-detail__article-tag-list']}>
          {blog.categories?.map((category) => (
            <span key={category?.id} className={styles['p-content-detail__article-tag']}>
              {category?.name}
            </span>
          ))}
        </div>
        <div className={styles['p-content-detail__article-date-wrapper']}>
          <p className={styles['p-content-detail__article-date']}>{blog.formattedPublishedAt} 公開</p>
          <p className={styles['p-content-detail__article-date']}>{blog.formattedUpdatedAt} 更新</p>
        </div>
      </div>
      <div className={styles['p-content-detail__toc-mobile']}>
        <TableOfContents headings={headings} isMobile />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} className={styles.content} />
    </div>
    <div className={styles['p-content-detail__toc']}>
      <TableOfContents headings={headings} />
    </div>
  </div>
);

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlog(params.id);
  const $ = cheerio.load(blog.content ?? '');
  const headings = $('h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: $(data.children[0]).text(),
    id: data.attribs.id,
    tagName: data.name,
  }));

  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class')?.split('-')[1];
    try {
      const result = hljs.highlight($(elm).text(), { language: lang ?? 'typescript' });
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    } catch {
      const result = hljs.highlight($(elm).text(), { language: 'typescript' });
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    }
  });

  return <PlainBlogDetail blog={{ ...blog, content: $.html() }} headings={toc} />;
};

export default BlogDetail;
