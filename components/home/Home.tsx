import {
    ImageField,
    KeyTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import gsap from 'gsap';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { DOCS_SLUG, MAILS_SLUG } from '../../utils/constant';
import {
    SlicedPrismicDocument,
    WithPrismicSlicedContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';
import { ArrowButtonPicto, PictoPng } from '../common/Picto';
import { HomeProduct } from './HomeProduct';

type HomeSliceItem = {
    description: KeyTextField;
    picto: ImageField;
};

type HomeSlicePrimary = {
    subtitle: KeyTextField;
    title: KeyTextField;
};

export type HomeSlice = SharedSlice<
    string,
    SharedSliceVariation<string, HomeSlicePrimary, HomeSliceItem>
>;

export type HomeProps = WithPrismicSlicedContent<HomeSlice>;
export type HomePrismicDocument = SlicedPrismicDocument<HomeSlice>;

export const Home: React.FC<HomeProps> = ({ content }) => {
    const slices = content.data.slices;
    const timeline = useRef(gsap.timeline());
    const productContent = useRef<Element[]>([]);
    const [index, setIndex] = useState(0);
    const { pathname } = useRouter();
    const isDocs = pathname === DOCS_SLUG;

    useIsomorphicLayoutEffect(() => {
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
            {slices.map((slice, index) => (
                <HomeProduct
                    index={index}
                    title={slice.primary.title ?? ''}
                    subtitle={slice.primary.subtitle ?? ''}
                    linkToProduct={isDocs ? MAILS_SLUG : DOCS_SLUG}
                    key={index}
                >
                    <ul>
                        {slice.items.map((item, index) => (
                            <li key={index}>
                                {item.picto.url && item.picto.alt && (
                                    <PictoPng
                                        src={item.picto.url}
                                        alt={item.picto.alt}
                                    />
                                )}
                                {item.description}
                            </li>
                        ))}
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
