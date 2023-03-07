import {
    ImageField,
    KeyTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import gsap from 'gsap';
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

export const Home = ({ content }: HomeProps) => {
    const slices = content.data.slices;
    const timeline = useRef(gsap.timeline());
    const productContent = useRef<Element[]>([]);
    const [idx, setIndex] = useState(0);

    useIsomorphicLayoutEffect(() => {
        productContent.current = gsap.utils.toArray(
            '.home__product',
        ) as Element[];
    }, [idx]);

    const switchProduct = () => {
        const inactive = idx === 0 ? 1 : 0;

        timeline.current
            .to(productContent.current[idx], {
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
                    isActive={idx === index}
                    title={slice.primary.title ?? ''}
                    subtitle={slice.primary.subtitle ?? ''}
                    linkToProduct={index === 0 ? DOCS_SLUG : MAILS_SLUG}
                    isDocs={index === 0}
                    key={index}
                >
                    <ul>
                        {slice.items.map((item, index) => (
                            <li key={index}>
                                <PictoPng image={item.picto} />
                                {item.description}
                            </li>
                        ))}
                    </ul>
                </HomeProduct>
            ))}

            <div className="home__scroll-to-discover" onClick={switchProduct}>
                <ArrowButtonPicto />
                Cliquez pour découvrir notre second produit :{' '}
                <strong>{idx === 0 ? 'Mails' : 'Docs'}</strong>
            </div>
        </Page>
    );
};
