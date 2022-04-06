import type { GetStaticProps, NextPage } from 'next';
import { Faq, FaqPrismicDocument, FaqProps } from '../components/faq/Faq';
import { FAQ } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type FaqPageProps = FaqProps;

const FaqPage: NextPage<FaqPageProps> = ({ content }) => {
    return <Faq content={content} />;
};

export const getStaticProps: GetStaticProps<FaqPageProps> = async () => {
    const content = await Client().getSingle<FaqPrismicDocument>(FAQ);

    return {
        props: {
            content,
        },
    };
};
export default FaqPage;
