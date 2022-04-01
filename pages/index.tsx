import type { GetStaticProps, NextPage } from 'next';
import { Home } from '../components/home/Home';
import { HOMEPAGE } from '../utils/constant';
import { Client, PrismicDocumentType } from '../utils/prismicHelpers';

export interface PageWithPrismic {
    content: PrismicDocumentType;
}

const HomePage: NextPage<PageWithPrismic> = ({ content }) => {
    return <Home content={content} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const content = await Client().getSingle(HOMEPAGE);

    return {
        props: {
            content,
        },
    };
};
export default HomePage;
