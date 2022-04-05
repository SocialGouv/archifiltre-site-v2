/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from '@prismicio/react';
import {
    RichTextField,
    KeyTextField,
    SharedSlice,
    SharedSliceVariation,
    FilledLinkToWebField,
} from '@prismicio/types';
import Link from 'next/link';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { versionsStore } from '../../store/VersionsStore';
import { getVersionsFromGH } from '../../utils';
import {
    SlicedPrismicDocument,
    WithPrismicSlicedContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';

type DownloadSlicePrimary = {
    changelog: RichTextField;
    title: KeyTextField;
    documentation: FilledLinkToWebField;
};

export type DownloadSlice = SharedSlice<
    string,
    SharedSliceVariation<string, DownloadSlicePrimary>
>;

export type DownloadProps = WithPrismicSlicedContent<DownloadSlice>;

export type DownloadPrismicDocument = SlicedPrismicDocument<DownloadSlice>;

export const Download: React.FC<DownloadProps> = ({ content }) => {
    const { setProductsVersions, productsVersions } = versionsStore();
    const { slices } = content.data;

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
                {slices.map((slice, index) => (
                    <div className="download__products__item" key={index}>
                        <h3>
                            {slice.primary.title}
                            <span>{productsVersions.docs[0].name}</span>
                        </h3>
                        <PrismicRichText field={slice.primary.changelog} />
                        <button className="btn-link">
                            Télécharger {slice.primary.title}
                        </button>
                        <Link href={slice.primary.documentation.url}>
                            <a
                                className="btn-link documentation"
                                target="_blank"
                            >
                                Documentation
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </Page>
    );
};
