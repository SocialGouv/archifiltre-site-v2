import type { GetStaticProps, NextPage } from 'next';
import {
    Product,
    ProductPrismicDocument,
    ProductProps,
} from '../components/product/Product';
import { DOCS } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type DocsPageProps = ProductProps;

const ProductPage: NextPage<DocsPageProps> = ({ content }) => {
    return <Product content={content} />;
};

export const getStaticProps: GetStaticProps<DocsPageProps> = async () => {
    const content = await Client().getSingle<ProductPrismicDocument>(DOCS);

    return {
        props: {
            content,
        },
    };
};
export default ProductPage;
