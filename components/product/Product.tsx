import {
    ImageField,
    KeyTextField,
    RichTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import { useRouter } from 'next/router';
import { ArchifiltreVersions } from '../../utils';
import {
    SlicedAndCustomPrismicDocument,
    WithPrismicSlicedAndCustomContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';
import { ProductGeneral } from './ProductGeneral';
import { ProductSidebar } from './ProductSidebar';
import { ProductVersion } from './ProductVersion';

type ProductSlicePrimary = {
    description: RichTextField;
    picto: ImageField;
    title: KeyTextField;
};

export type ProductSlice = SharedSlice<
    string,
    SharedSliceVariation<string, ProductSlicePrimary>
>;

export type ProductCustomFields = {
    title: KeyTextField;
};

export type ProductProps = WithPrismicSlicedAndCustomContent<
    ProductSlice,
    ProductCustomFields
> & {
    productVersions: ArchifiltreVersions;
};

export type ProductPrismicDocument = SlicedAndCustomPrismicDocument<
    ProductSlice,
    ProductCustomFields
>;

export const Product: React.FC<ProductProps> = ({
    content,
    productVersions,
}) => {
    const { pathname } = useRouter();

    const { title, slices: product } = content.data;
    const isDocs = pathname === '/docs';

    const versions = isDocs ? productVersions.docs : productVersions.mails;

    return (
        <Page className="product">
            <ProductSidebar title={title} />
            <ProductGeneral product={product} />
            <ProductVersion versions={versions} />
        </Page>
    );
};
