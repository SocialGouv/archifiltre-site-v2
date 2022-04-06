/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from '@prismicio/react';
import {
    RichTextField,
    KeyTextField,
    SharedSlice,
    SharedSliceVariation,
    FilledLinkToWebField,
    SelectField,
} from '@prismicio/types';
import Link from 'next/link';
import React from 'react';
import {
    ArchifiltreProductVersionInfo,
    ArchifiltreVersions,
    getDownloadLink,
} from '../../utils';
import {
    SlicedPrismicDocument,
    WithPrismicSlicedContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';

type DownloadSlicePrimary = {
    changelog: RichTextField;
    title: KeyTextField;
    documentation: FilledLinkToWebField;
    key: SelectField<'docs' | 'mails'>;
};

export type DownloadSlice = SharedSlice<
    string,
    SharedSliceVariation<string, DownloadSlicePrimary>
>;

export type DownloadProps = WithPrismicSlicedContent<DownloadSlice> & {
    productVersions: ArchifiltreVersions;
};

export type DownloadPrismicDocument = SlicedPrismicDocument<DownloadSlice>;

interface DownloadProdutItemProps {
    slice: DownloadSlice;
    product?: ArchifiltreProductVersionInfo[number];
}
const DownloadProductItem: React.FC<DownloadProdutItemProps> = ({
    slice,
    product,
}) => (
    <div className="download__products__item">
        <h3>
            {slice.primary.title}
            <span>
                {product ? product.name : 'Pas de version stable disponible 😢'}
            </span>
        </h3>
        <PrismicRichText field={slice.primary.changelog} />

        <div className="download__products__item__doc">
            <button
                className="btn-link"
                onClick={() => window.open(getDownloadLink(product))}
            >
                Télécharger {slice.primary.title}
            </button>
            <Link href={slice.primary.documentation.url}>
                <a className="btn-link documentation" target="_blank">
                    Documentation
                </a>
            </Link>
        </div>
        {product && (
            <Link href={product.html_url}>
                <a
                    className="underline download__products__item__other"
                    href=""
                >
                    Besoin d'une autre version ?
                </a>
            </Link>
        )}
    </div>
);

export const Download: React.FC<DownloadProps> = ({
    content,
    productVersions,
}) => {
    const { slices } = content.data;

    return (
        <Page className="download">
            <h1>Téléchargements</h1>
            <h2>
                Découvrez les dernières versions et nouveautés des produits
                d'Archifiltre.
            </h2>
            <div className="download__products">
                {slices.map((slice, index) => {
                    if (slice.primary.key) {
                        const productOrError =
                            productVersions[slice.primary.key];

                        if (typeof productOrError === 'string') {
                            return <span>{productOrError}</span>;
                        }

                        return (
                            <DownloadProductItem
                                slice={slice}
                                key={index}
                                product={
                                    productOrError.filter(p => !p.prerelease)[0]
                                }
                            />
                        );
                    }
                })}
            </div>
        </Page>
    );
};
