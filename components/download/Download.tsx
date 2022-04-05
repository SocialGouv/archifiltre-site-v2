/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { PageWithPrismic } from '../../pages';
import { versionsStore } from '../../store/VersionsStore';
import { getVersionsFromGH } from '../../utils';
import { Page } from '../common/Page';

export const Download: React.FC<PageWithPrismic> = ({ content }) => {
    const { setProductsVersions, productsVersions } = versionsStore();
    const { slices, slices1 } = content.data;
    const docs = slices[0].primary;
    const mails = slices1[0].primary;

    useIsomorphicLayoutEffect(() => {
        !productsVersions.docs.length && getVersionsFromGH(setProductsVersions);
    }, []);

    if (!productsVersions.docs.length) return null;

    return (
        <Page className="download">
            <h1>Téléchargements</h1>
            <h2>
                Découvrez les dernières versions et nouveautés de Docs et de
                Mails d'Archifiltre.
            </h2>
            <div className="download__products">
                <div className="download__products__item">
                    <h3>
                        Docs
                        <span>{productsVersions.docs[0].name}</span>
                    </h3>
                    <PrismicRichText field={docs.changelog} />
                    <button className="btn-link">Télécharger Docs</button>
                    <Link href="https://github.com/SocialGouv/archifiltre-docs">
                        <a className="btn-link documentation" target="_blank">
                            Documentation
                        </a>
                    </Link>
                </div>

                <div className="download__products__item">
                    <h3>
                        Mails
                        <span>{productsVersions.mails[0].name}</span>
                    </h3>
                    <PrismicRichText field={mails.changelog} />
                    <div className="download__products__item__buttons">
                        <button className="btn-link">Télécharger Mails</button>
                        <Link href="https://github.com/SocialGouv/archifiltre-mails">
                            <a
                                className="btn-link documentation"
                                target="_blank"
                            >
                                Documentation
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Page>
    );
};
