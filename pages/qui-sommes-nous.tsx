import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
    About,
    AboutPrismicDocument,
    AboutProps,
} from '../components/about/About';
import { ABOUT_US } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type AboutPageProps = AboutProps;

const AboutPage: NextPage<AboutProps> = ({ content }) => {
    return (
        <>
            <NextSeo
                title="Qui sommes-nous ?"
                description="Découvrez l'équipe produit et technique qui se cache derrière le nom Archifiltre !"
            />
            <About content={content} />;
        </>
    );
};

export const getStaticProps: GetStaticProps<AboutProps> = async ({
    previewData,
}) => {
    const content = await Client({
        previewData,
    }).getSingle<AboutPrismicDocument>(ABOUT_US);

    return {
        props: {
            content,
        },
    };
};
export default AboutPage;
