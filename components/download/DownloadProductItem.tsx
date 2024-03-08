import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import React from 'react';
import { ArchifiltreProductVersionInfo, getDownloadLink } from '../../utils';
import { DownloadSlice } from './Download';

interface DownloadProductItemProps {
    product?: ArchifiltreProductVersionInfo[number];
    slice: DownloadSlice;
}
const DownloadProductItem = ({ slice, product }: DownloadProductItemProps) => {
    const downloadLink = getDownloadLink(product);
    const productName = product?.name?.substring(0, product?.name.indexOf('-'));

    return (
        <div className="download__products__item">
            <h3>
                {slice.primary.title}
                <span>
                    {product
                        ? productName
                        : 'Pas de version stable disponible 😢'}
                </span>
            </h3>
            <PrismicRichText field={slice.primary.changelog} />

            <div className="download__products__item__doc">
                {downloadLink && (
                    <Link href={downloadLink}>
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

export default DownloadProductItem;
