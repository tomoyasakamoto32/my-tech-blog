import dynamic from 'next/dynamic';

const BlogDetail = dynamic(() => import('../../ui/BlogDetail'));

const Page = ({ params }: { params: { id: string } }) => <BlogDetail params={params} />;

export default Page;
