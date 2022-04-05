/* eslint-disable react/no-unescaped-entities */
import gsap from 'gsap';
import { useRouter } from 'next/router';
import { useLayoutEffect, useRef, useState } from 'react';
import { PageWithPrismic } from '../../pages';
import { ButtonLink } from '../common/Button';
import { Page } from '../common/Page';
import { ArrowButtonPicto, PictoPng } from '../common/Picto';

interface SliceHomeItem {
    picto: {
        dimensions: {
            width: number;
            height: number;
        };
        alt: string;
        copyright: null;
        url: string;
    };
    description: string;
}

interface SliceHomePrimary {
    subtitle: string;
    title: string;
}

export interface ApiSliceObject<TPrimary, TItem> {
    primary: TPrimary;
    items: TItem[];
    slice_label?: string;
    slice_type?: string;
    variation: string;
    version: string;
}

export type SliceHome = ApiSliceObject<SliceHomePrimary, SliceHomeItem>;

interface HomeProductProps {
    title: string;
    subtitle: string;
    linkToProduct: string;
    index: number;
}

export const HomeProduct: React.FC<HomeProductProps> = ({
    title,
    subtitle,
    linkToProduct,
    children,
    index,
}) => (
    <div className="home__product" data-index={index}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {children}
        <div className="home__product__discover">
            <ButtonLink url={linkToProduct} label="découvrir" />
        </div>
    </div>
);

export const Home: React.FC<PageWithPrismic> = ({ content, test }) => {
    const slices = content.data.slices;
    const timeline = useRef(gsap.timeline());
    const productContent = useRef<Element[]>([]);
    const [index, setIndex] = useState(0);
    const { pathname } = useRouter();
    const isDocs = pathname === '/docs';

    console.log(slices);

    useLayoutEffect(() => {
        productContent.current = gsap.utils.toArray(
            '.home__product',
        ) as Element[];
    }, []);

    const switchProduct = () => {
        const inactive = index === 0 ? 1 : 0;

        timeline.current
            .to(productContent.current[index], {
                opacity: 0,
            })
            .to(productContent.current[inactive], {
                opacity: 1,
            });
        setIndex(inactive);
    };

    return (
        <Page className="home">
            {test.map((slice: ApiSliceObject, index: number) => (
                <HomeProduct
                    index={index}
                    title={slice.primary.title}
                    subtitle={slice.primary.subtitle}
                    linkToProduct={isDocs ? '/mails' : '/docs'}
                    key={index}
                >
                    <ul>
                        {slice.items.map(
                            (item: SliceHomeItem, index: number) => (
                                <li key={index}>
                                    <PictoPng
                                        src={item.picto.url}
                                        alt={item.picto.alt}
                                    />
                                    {item.description}
                                </li>
                            ),
                        )}
                    </ul>
                </HomeProduct>
            ))}

            <div className="home__scroll-to-discover" onClick={switchProduct}>
                <ArrowButtonPicto />
                Cliquez pour découvrir notre second produit :{' '}
                <strong>{index === 0 ? 'Mails' : 'Docs'}</strong>
            </div>
        </Page>
    );
};
