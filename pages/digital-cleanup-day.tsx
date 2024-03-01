import { iframeResizer } from 'iframe-resizer';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

const StatisticPage: NextPage = () => {
    const iframeId = 'softr-ca018cc1-9c64-4844-aa7f-d555812a9b1d';

    useEffect(() => {
        iframeResizer({ checkOrigin: false, log: true }, `#${iframeId}`);
    }, []);

    return (
        <>
            <NextSeo
                title="Digital Cleanup Day"
                description="Journée de nettoyage numérique"
            />
            <iframe
                id={iframeId}
                src="https://roger1200.softr.app/"
                width="100%"
                height="200"
                style={{
                    marginTop: '135px',
                    overflow: 'hidden',
                    border: '0',
                }}
            ></iframe>
        </>
    );
};

export default StatisticPage;
