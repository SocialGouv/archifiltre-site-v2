import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
    Product,
    ProductPrismicDocument,
    ProductProps,
} from '../components/product/Product';
import { getVersionsFromGH } from '../utils';
import { MAILS, REVALIDATE_TIME } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type MailsPageProps = Partial<ProductProps>;

const ProductPage: NextPage<MailsPageProps> = ({
    content,
    productVersions,
}) => {
    if (!content || !productVersions) return null;
    return (
        <>
            <NextSeo
                title="Produit - Mails"
                description="Visualisez, appréhendez et améliorez vos arborescences de fichiers et de messageries !"
            />
            <Product content={content} productVersions={productVersions} />;
        </>
    );
};

export const getStaticProps: GetStaticProps<MailsPageProps> = async ({
    previewData,
}) => {
    const [content, productVersions] = await Promise.all([
        Client({ previewData }).getSingle<ProductPrismicDocument>(MAILS),
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
