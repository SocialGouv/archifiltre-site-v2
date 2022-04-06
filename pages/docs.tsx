import type { GetStaticProps, NextPage } from 'next';
import {
    Product,
    ProductPrismicDocument,
    ProductProps,
} from '../components/product/Product';
import { getVersionsFromGH } from '../utils';
import { DOCS, REVALIDATE_TIME } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type DocsPageProps = Partial<ProductProps>;

const ProductPage: NextPage<DocsPageProps> = ({ content, productVersions }) => {
    if (!content || !productVersions) return null;
    return <Product content={content} productVersions={productVersions} />;
};

export const getStaticProps: GetStaticProps<DocsPageProps> = async () => {
    const [content, productVersions] = await Promise.all([
        Client().getSingle<ProductPrismicDocument>(DOCS),
        getVersionsFromGH(),
    ]);

    return {
        props: {
            content,
            productVersions,
        },
        revalidate: REVALIDATE_TIME,
    };
};
export default ProductPage;
