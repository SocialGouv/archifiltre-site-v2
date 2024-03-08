import Link from 'next/link';
import React from 'react';
import { getDownloadLink } from '../../utils';
import { WithChildrenProps } from '../../utils/types';

interface HomeProductProps extends WithChildrenProps {
    subtitle: string;
    title: string;
}

export const HomeProduct = ({
    title,
    subtitle,
    children,
}: HomeProductProps) => {
    const docsDownloadLink = getDownloadLink(undefined, 'docs');
    const mailsDownloadLink = getDownloadLink(undefined, 'mails');

    return (
        <div className="home__product active" key={title}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {children}
            <div className="home__product__discover__wrapper">
                <div className="home__product__discover">
                    <h3>Docs</h3>
                    <div className="home__product__discover__btn">
                        <Link href={'/docs'}>
                            <a
                                className="btn-link documentation"
                                target="_blank"
                            >
                                découvrir
                            </a>
                        </Link>
                        {docsDownloadLink && (
                            <Link href={docsDownloadLink}>
                                <a
                                    className="btn-link download"
                                    target="_blank"
                                >
                                    Télécharger
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="home__product__discover">
                    <h3>Mails</h3>
                    <div className="home__product__discover__btn">
                        <Link href={'/mails'}>
                            <a
                                className="btn-link documentation"
                                target="_blank"
                            >
                                découvrir
                            </a>
                        </Link>
                        {mailsDownloadLink && (
                            <Link href={mailsDownloadLink}>
                                <a
                                    className="btn-link download"
                                    target="_blank"
                                >
                                    Télécharger
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
