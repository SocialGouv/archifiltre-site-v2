import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import React from 'react';
import { ArchifiltreProductVersionInfo, getDownloadLink } from '../../utils';
import { DownloadSlice } from './Download';

interface DownloadProdutItemProps {
    product?: ArchifiltreProductVersionInfo[number];
    slice: DownloadSlice;
}
export const DownloadProductItem = ({
    slice,
    product,
}: DownloadProdutItemProps) => {
    const dlHref = getDownloadLink(product);
    console.log({ dlHref });

    return (
        <div className="download__products__item">
            <h3>
                {slice.primary.title}
                <span>
                    {product
                        ? product.name
                        : 'Pas de version stable disponible 😢'}
                </span>
            </h3>
            <PrismicRichText field={slice.primary.changelog} />

            <div className="download__products__item__doc">
                {dlHref && (
                    <Link href={dlHref}>
                        <a className="btn-link download" target="_blank">
                            Télécharger {slice.primary.title}
                        </a>
                    </Link>
                )}
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
                        target="_blank"
                    >
                        Besoin d&apos;une autre version ?
                    </a>
                </Link>
            )}
        </div>
    );
};
