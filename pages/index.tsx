import type { GetStaticProps, NextPage } from 'next';
import { Home, HomePrismicDocument, HomeProps } from '../components/home/Home';
import { HOMEPAGE } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type HomePageProps = HomeProps;

const HomePage: NextPage<HomePageProps> = ({ content }) => {
    return <Home content={content} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
    previewData,
}) => {
    const content = await Client({
        previewData,
    }).getSingle<HomePrismicDocument>(HOMEPAGE);

    return {
        props: {
            content,
        },
    };
};
export default HomePage;
