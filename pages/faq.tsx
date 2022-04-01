import type { GetStaticProps, NextPage } from 'next';
import { Faq } from '../components/faq/Faq';
import { FAQ } from '../utils/constant';
import { Client } from '../utils/prismicHelpers';
import { PageWithPrismic } from './index';

const FaqPage: NextPage<PageWithPrismic> = ({ content }) => {
    return <Faq content={content} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const content = await Client().getSingle(FAQ);

    return {
        props: {
            content,
        },
    };
};
export default FaqPage;
