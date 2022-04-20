import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Legals } from '../components/Legals/Legals';

const LegalsPage: NextPage = () => (
    <>
        <NextSeo
            title="Mentions légales"
            description="Découvrez nos mentions légales"
        />
        <Legals />
    </>
);
export default LegalsPage;
