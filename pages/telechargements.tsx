import type { GetStaticProps, NextPage } from 'next';
import {
    Download,
    DownloadPrismicDocument,
    DownloadProps,
} from '../components/download/Download';

import { DOWNLOAD } from '../utils/constant';
import { Client } from '../utils/prismic/helpers';

export type DownloadPageProps = DownloadProps;

const DownloadPage: NextPage<DownloadProps> = ({ content }) => {
    return <Download content={content} />;
};

export const getStaticProps: GetStaticProps<DownloadProps> = async () => {
    const content = await Client().getSingle<DownloadPrismicDocument>(DOWNLOAD);

    return {
        props: {
            content,
        },
    };
};
export default DownloadPage;
