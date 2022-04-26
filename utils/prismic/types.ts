import {
    SharedSlice,
    PrismicDocument,
    SliceZone,
    AnyRegularField,
} from '@prismicio/types';

export type PrismicSimpleContent = Record<string, AnyRegularField>;
export type PrismicDefaultPrimary = PrismicSimpleContent;

export interface WithPrismicSlicedContent<TSlice extends SharedSlice> {
    content: SlicedPrismicDocument<TSlice>;
}
export interface WithPrismicSimpleContent<
    TFields extends PrismicSimpleContent,
> {
    content: CustomPrismicDocument<TFields>;
}

export interface WithPrismicSlicedAndCustomContent<
    TSlice extends SharedSlice,
    TFields extends PrismicSimpleContent,
> {
    content: SlicedAndCustomPrismicDocument<TSlice, TFields>;
}

export type SlicedPrismicDocument<TSlice extends SharedSlice> =
    PrismicDocument<{ slices: SliceZone<TSlice> }>;

export type CustomPrismicDocument<TFields extends PrismicSimpleContent> =
    PrismicDocument<TFields>;

export type SlicedAndCustomPrismicDocument<
    TSlice extends SharedSlice,
    TFields extends PrismicSimpleContent,
> = SlicedPrismicDocument<TSlice> & CustomPrismicDocument<TFields>;

export interface PrismicRouter {
    routes: {
        path: string;
        type: string;
    }[];
}
