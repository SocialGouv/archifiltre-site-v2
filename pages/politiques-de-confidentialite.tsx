import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Policy } from '../components/Policy/Policy';

const PolicyPage: NextPage = () => (
    <>
        <NextSeo
            title="Politiques de confidentialit√©"
            description="D√©couvrez nos politiques de confidentialit√©"
        />
        <Policy />
    </>
);
export default PolicyPage;
