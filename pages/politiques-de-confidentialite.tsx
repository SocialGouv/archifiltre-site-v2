import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Policy } from '../components/Policy/Policy';

const PolicyPage: NextPage = () => (
    <>
        <NextSeo
            title="Politiques de confidentialité"
            description="Découvrez nos politiques de confidentialité"
        />
        <Policy />
    </>
);
export default PolicyPage;
