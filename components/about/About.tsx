import { PrismicLink, PrismicRichText } from '@prismicio/react';
import {
    FilledLinkToWebField,
    ImageField,
    KeyTextField,
    RichTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import {
    SlicedAndCustomPrismicDocument,
    WithPrismicSlicedAndCustomContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';
import { NextPrismicImage } from '../common/prismic/Image';

type AboutSlicePrimary = {
    title: KeyTextField;
};

type AboutSliceItem = {
    image: ImageField;
    job: KeyTextField;
    linkedin: FilledLinkToWebField;
    name: KeyTextField;
    surname: KeyTextField;
};

export type AboutSlice = SharedSlice<
    string,
    SharedSliceVariation<string, AboutSlicePrimary, AboutSliceItem>
>;

export type AboutCustomFields = {
    description: RichTextField;
    title: KeyTextField;
};

export type AboutProps = WithPrismicSlicedAndCustomContent<
    AboutSlice,
    AboutCustomFields
>;

export type AboutPrismicDocument = SlicedAndCustomPrismicDocument<
    AboutSlice,
    AboutCustomFields
>;

export const About = ({ content }: AboutProps) => {
    const { title, description, slices } = content.data;

    return (
        <Page className="about">
            <h1>{title}</h1>
            <h2>
                <PrismicRichText field={description} />
            </h2>

            {slices.map((slice, index) => (
                <div className="about__section" key={index}>
                    <h3 className="about__section__title">
                        {slice.primary.title}
                    </h3>
                    <div className="about__section__people">
                        {slice.items.map((item, index) => (
                            <div
                                className="about__section__people__item"
                                key={index}
                            >
                                <div className="about__section__people__item__avatar">
                                    <NextPrismicImage field={item.image} />
                                </div>
                                <div className="about__section__people__item__name">
                                    {item.name}
                                </div>
                                <div className="about__section__people__item__surname">
                                    {item.surname}
                                </div>
                                <div className="about__section__people__item__job">
                                    {item.job}
                                </div>
                                <PrismicLink
                                    className="about__section__people__item__linkedin underline"
                                    field={item.linkedin}
                                >
                                    Linkedin
                                </PrismicLink>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Page>
    );
};
