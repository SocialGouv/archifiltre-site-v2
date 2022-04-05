import type { GetStaticProps, NextPage } from 'next';
import { Product } from '../components/product/Product';
import { DOCS } from '../utils/constant';
import { Client } from '../utils/prismicHelpers';
import { PageWithPrismic } from './index';

const ProductPage: NextPage<PageWithPrismic> = ({ content }) => {
    return <Product content={content} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const content = await Client().getSingle(DOCS);

    return {
        props: {
            content,
        },
    };
};
export default ProductPage;
