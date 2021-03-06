import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
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
    return (
        <>
            <NextSeo
                title="Produit - Docs"
                description="Visualisez, appréhendez et améliorez vos arborescences de fichiers et de messageries !"
            />
            <Product content={content} productVersions={productVersions} />;
        </>
    );
};

export const getStaticProps: GetStaticProps<DocsPageProps> = async ({
    previewData,
}) => {
    const [content, productVersions] = await Promise.all([
        Client({ previewData }).getSingle<ProductPrismicDocument>(DOCS),
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
