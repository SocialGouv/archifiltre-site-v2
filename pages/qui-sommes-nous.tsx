import type { GetStaticProps, NextPage } from 'next';
import { About } from '../components/about/About';
import { ABOUT_US } from '../utils/constant';
import { Client } from '../utils/prismicHelpers';
import { PageWithPrismic } from './index';

const AboutPage: NextPage<PageWithPrismic> = ({ content }) => {
    return <About content={content} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const content = await Client().getSingle(ABOUT_US);

    return {
        props: {
            content,
        },
    };
};
export default AboutPage;
