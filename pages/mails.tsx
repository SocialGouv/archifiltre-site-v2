import type { GetStaticProps, NextPage } from 'next';
import {
    Product,
    ProductPrismicDocument,
    ProductProps,
} from '../components/product/Product';
import { MAILS } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type MailsPageProps = ProductProps;

const ProductPage: NextPage<MailsPageProps> = ({ content }) => {
    return <Product content={content} />;
};

export const getStaticProps: GetStaticProps<MailsPageProps> = async () => {
    const content = await Client().getSingle<ProductPrismicDocument>(MAILS);

    return {
        props: {
            content,
        },
    };
};
export default ProductPage;
