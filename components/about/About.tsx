/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { PageWithPrismic } from '../../pages';
import { Page } from '../common/Page';

export const About: React.FC<PageWithPrismic> = ({ content }) => {
    const { title, description, slices } = content.data;

    return (
        <Page className="about">
            <h1>{title}</h1>
            <h2>{description}</h2>

            {slices.map((slice: any, index: number) => (
                <div className="about__section" key={index}>
                    <h3 className="about__section__title">
                        {slice.primary.title}
                    </h3>
                    <div className="about__section__people">
                        {slice.items.map((item: any, index: number) => (
                            <div
                                className="about__section__people__item"
                                key={index}
                            >
                                <div className="about__section__people__item__avatar">
                                    <img
                                        src={item.image.url}
                                        alt={item.image.alt}
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
