import Link from 'next/link';

import styles from './TableOfContents.module.css';

type PlainTableOfContentsProps = {
  headings: {
    tagName: string;
    id: string;
    text: string | undefined;
  }[];
};
type TableOfContentsProps = PlainTableOfContentsProps & {
  isMobile?: boolean;
};
// コンテンツのダウンロードに時間がかかり過ぎているのでchakra-uiを剥がした
const PlainTableOfContents = ({ headings }: PlainTableOfContentsProps) => (
  <div className={styles['p-toc']}>
    <div className={styles['p-toc__wrapper']}>
      <p className={styles['p-toc__heading']}>目次</p>
      {headings.map((heading) => (
        <Link href={`#${heading.id}`} key={heading.id} className={styles['p-toc__link']}>
          {heading.tagName === 'h2' && <p className={styles['p-toc__heading-text']}>{heading.text}</p>}
          {heading.tagName === 'h3' && (
            <div className={styles['p-toc__h3-wrapper']}>
              <p className={styles['p-toc__heading-text--prefix']}>-</p>
              <p className={styles['p-toc__heading-text']}>{heading.text}</p>
            </div>
          )}
        </Link>
      ))}
    </div>
  </div>
);

// コンテンツのダウンロードに時間がかかり過ぎているのでchakra-uiを剥がした
const PlainTableOfContentsMobile = ({ headings }: PlainTableOfContentsProps) => (
  <div>
    <div className={styles['p-toc__wrapper']}>
      <p className={styles['p-toc__heading']}>目次</p>
      {headings.map((heading) => (
        <Link href={`#${heading.id}`} key={heading.id} className={styles['p-toc__link']}>
          {heading.tagName === 'h2' && <p className={styles['p-toc__heading-text']}>{heading.text}</p>}
          {heading.tagName === 'h3' && (
            <div className={styles['p-toc__h3-wrapper']}>
              <p className={styles['p-toc__heading-text--sm-prefix']}>-</p>
              <p className={styles['p-toc__heading-text--sm']}>{heading.text}</p>
            </div>
          )}
        </Link>
      ))}
    </div>
  </div>
);

const TableOfContents = ({ headings, isMobile }: TableOfContentsProps) =>
  isMobile ? <PlainTableOfContentsMobile headings={headings} /> : <PlainTableOfContents headings={headings} />;

export default TableOfContents;
