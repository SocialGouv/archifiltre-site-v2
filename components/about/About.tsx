/* eslint-disable @next/next/no-img-element */
import {
    FilledLinkToWebField,
    ImageField,
    KeyTextField,
    RichTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import Link from 'next/link';
import {
    SlicedAndCustomPrismicDocument,
    WithPrismicSlicedAndCustomContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';

type AboutSlicePrimary = {
    title: KeyTextField;
};

type AboutSliceItem = {
    image: ImageField;
    name: KeyTextField;
    surname: KeyTextField;
    job: KeyTextField;
    linkedin: FilledLinkToWebField;
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

export const About: React.FC<AboutProps> = ({ content }) => {
    const { title, description, slices } = content.data;

    return (
        <Page className="about">
            <h1>{title}</h1>
            <h2>{description}</h2>

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
                                    <img
                                        src={item.image.url ?? ''}
                                        alt={item.image.alt ?? ''}
                                    />
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
                                <Link href={item.linkedin.url || ''}>
                                    <a className="about__section__people__item__linkedin underline">
                                        Linkedin
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Page>
    );
};
