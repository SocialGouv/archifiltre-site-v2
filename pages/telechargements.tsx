import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
    Download,
    DownloadPrismicDocument,
    DownloadProps,
} from '../components/download/Download';
import { getVersionsFromGH } from '../utils';

import { DOWNLOAD, REVALIDATE_TIME } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type DownloadPageProps = Partial<DownloadProps>;

const DownloadPage: NextPage<DownloadPageProps> = ({
    content,
    productVersions,
}) => {
    if (!content || !productVersions) return null;

    return (
        <>
            <NextSeo
                title="Téléchargements"
                description="Télécharger la dernière version de Mails et Docs par Archifiltre !"
            />
            <Download content={content} productVersions={productVersions} />;
        </>
    );
};

export const getStaticProps: GetStaticProps<DownloadPageProps> = async ({
    previewData,
}) => {
    const [content, productVersions] = await Promise.all([
        Client({ previewData }).getSingle<DownloadPrismicDocument>(DOWNLOAD),
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
export default DownloadPage;
