import Link from 'next/link';
import React from 'react';
import { getDownloadLink } from '../../utils';

const AnnouncementBanner = () => {
    const docsDownloadLink = getDownloadLink(undefined, 'docs');

    return (
        <div className="announcement-banner">
            Nouvelle version disponible :{' '}
            <strong>
                Archifiltre Docs v4.1.1 &quot;Unicorn Utopia&quot; 🦄
            </strong>{' '}
            {docsDownloadLink && (
                <Link href={docsDownloadLink} className={'announcement-link'}>
                    Découvrez-la ici
                </Link>
            )}
        </div>
    );
};

export default AnnouncementBanner;
