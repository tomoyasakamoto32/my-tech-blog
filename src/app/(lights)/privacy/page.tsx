import dynamic from 'next/dynamic';

const Privacy = dynamic(() => import('../../ui/lights/Privacy'));

const Page = () => <Privacy />;

export default Page;
