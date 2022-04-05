import type { GetStaticProps, NextPage } from 'next';
import { Home, SliceHome } from '../components/home/Home';
import { HOMEPAGE } from '../utils/constant';
import { Client, PrismicDocumentType } from '../utils/prismicHelpers';

export interface PageWithPrismic {
    content: PrismicDocumentType;
}

const HomePage: NextPage<PageWithPrismic> = ({ content }) => {
    return <Home content={content} />;
};

export const getStaticProps: GetStaticProps<PageWithPrismic> = async () => {
    const content = (await Client().getSingle(HOMEPAGE)) as SliceHome;

    return {
        props: {
            content,
        },
    };
};
export default HomePage;
