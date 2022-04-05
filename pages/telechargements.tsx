import type { GetStaticProps, NextPage } from 'next';
import { Download } from '../components/download/Download';

import { DOWNLOAD } from '../utils/constant';
import { Client } from '../utils/prismicHelpers';
import { PageWithPrismic } from './index';

const DownloadPage: NextPage<PageWithPrismic> = ({ content }) => {
    return <Download content={content} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const content = await Client().getSingle(DOWNLOAD);

    return {
        props: {
            content,
        },
    };
};
export default DownloadPage;
