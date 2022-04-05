import type { GetStaticProps, NextPage } from 'next';
import {
    About,
    AboutPrismicDocument,
    AboutProps,
} from '../components/about/About';
import { ABOUT_US } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type AboutPageProps = AboutProps;

const AboutPage: NextPage<AboutProps> = ({ content }) => {
    return <About content={content} />;
};

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
    const content = await Client().getSingle<AboutPrismicDocument>(ABOUT_US);

    return {
        props: {
            content,
        },
    };
};
export default AboutPage;
