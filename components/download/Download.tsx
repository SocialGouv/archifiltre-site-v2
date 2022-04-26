/* eslint-disable react/no-unescaped-entities */

import {
    RichTextField,
    KeyTextField,
    SharedSlice,
    SharedSliceVariation,
    FilledLinkToWebField,
    SelectField,
} from '@prismicio/types';
import React from 'react';
import { ArchifiltreVersions } from '../../utils';
import {
    SlicedPrismicDocument,
    WithPrismicSlicedContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';
import { DownloadProductItem } from './DownloadProdutItemProps';

type DownloadSlicePrimary = {
    changelog: RichTextField;
    documentation: FilledLinkToWebField;
    key: SelectField<'docs' | 'mails'>;
    title: KeyTextField;
};

export type DownloadSlice = SharedSlice<
    string,
    SharedSliceVariation<string, DownloadSlicePrimary>
>;

export type DownloadProps = WithPrismicSlicedContent<DownloadSlice> & {
    productVersions: ArchifiltreVersions;
};

export type DownloadPrismicDocument = SlicedPrismicDocument<DownloadSlice>;

export const Download = ({ content, productVersions }: DownloadProps) => {
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
