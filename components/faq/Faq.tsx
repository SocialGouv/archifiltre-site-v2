import { useState } from 'react';
import { PageWithPrismic } from '../../pages';
import { isIndexActive } from '../../utils';
import { ButtonCircle } from '../common/Button';
import { Page } from '../common/Page';
import { Separator } from '../common/Separator';

export const Faq: React.FC<PageWithPrismic> = ({ content }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const { title, subtitle, slices } = content.data;

    return (
        <Page className="faq">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>

            <div className="faq__qa">
                {slices[0].items.map((item: any, index: number) => (
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
                            {isIndexActive(activeIndex, index) &&
                                item.answer[0].text}
                        </div>
                        <Separator />
                    </div>
                ))}
            </div>
        </Page>
    );
};
