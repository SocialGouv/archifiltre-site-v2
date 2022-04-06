import { PrismicRichText } from '@prismicio/react';
import {
    KeyTextField,
    RichTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import { useState } from 'react';
import { isIndexActive } from '../../utils';
import {
    SlicedAndCustomPrismicDocument,
    WithPrismicSlicedAndCustomContent,
} from '../../utils/prismic/types';
import { ButtonCircle } from '../common/Button';
import { Page } from '../common/Page';
import { Separator } from '../common/Separator';

export type FaqSliceItem = {
    answer: RichTextField;
    question: KeyTextField;
};

export type FaqCustomFields = {
    subtitle: KeyTextField;
    title: KeyTextField;
};

export type FaqSlice = SharedSlice<
    string,
    SharedSliceVariation<string, never, FaqSliceItem>
>;

export type FaqProps = WithPrismicSlicedAndCustomContent<
    FaqSlice,
    FaqCustomFields
>;

export type FaqPrismicDocument = SlicedAndCustomPrismicDocument<
    FaqSlice,
    FaqCustomFields
>;

export const Faq: React.FC<FaqProps> = ({ content }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const { title, subtitle, slices } = content.data;

    return (
        <Page className="faq">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>

            <div className="faq__qa">
                {slices[0]?.items.map((item, index) => (
                    <div
                        className="faq__qa__item"
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="faq__qa__item__question">
                            {item.question}
                            <ButtonCircle>
                                {isIndexActive(activeIndex, index) ? '-' : '+'}
                            </ButtonCircle>
                        </div>
                        <div className="faq__qa__item__answer">
                            {isIndexActive(activeIndex, index) && (
                                <PrismicRichText field={item.answer} />
                            )}
                        </div>
                        <Separator />
                    </div>
                ))}
            </div>
        </Page>
    );
};
