import dynamic from 'next/dynamic';

const Disclaimer = dynamic(() => import('../../ui/lights/Disclaimer'));

const Page = () => <Disclaimer />;

export default Page;
