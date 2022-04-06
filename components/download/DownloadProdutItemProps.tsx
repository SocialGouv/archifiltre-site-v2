import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import React from 'react';
import { ArchifiltreProductVersionInfo, getDownloadLink } from '../../utils';
import { DownloadSlice } from './Download';

interface DownloadProdutItemProps {
    product?: ArchifiltreProductVersionInfo[number];
    slice: DownloadSlice;
}
export const DownloadProductItem: React.FC<DownloadProdutItemProps> = ({
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
                    Besoin d&apos;une autre version ?
                </a>
            </Link>
        )}
    </div>
);