import {
    ImageField,
    KeyTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import { DOCS_SLUG, MAILS_SLUG } from '../../utils/constant';
import {
    SlicedPrismicDocument,
    WithPrismicSlicedContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';
import { PictoPng } from '../common/Picto';
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
    return (
        <Page className="home">
            {slices.slice(0, 1).map((slice, index) => (
                <HomeProduct
                    index={index}
                    title={slice.primary.title ?? ''}
                    subtitle={slice.primary.subtitle ?? ''}
                    linkToProduct={index === 0 ? DOCS_SLUG : MAILS_SLUG}
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
        </Page>
    );
};
