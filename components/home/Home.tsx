/* eslint-disable react/no-unescaped-entities */
import { PageWithPrismic } from '../../pages';
import { ButtonLink } from '../common/Button';
import { Page } from '../common/Page';
import { ArrowButtonPicto, PictoPng } from '../common/Picto';

interface HomeProductProps {
    title: string;
    subtitle: string;
    linkToProduct: string;
    active: boolean;
}
export const HomeProduct: React.FC<HomeProductProps> = ({
    title,
    subtitle,
    linkToProduct,
    children,
    active,
}) => (
    <div className={active ? 'home__product active' : 'home__product'}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {children}
        <div className="home__product__discover">
            <ButtonLink url={linkToProduct} label="découvrir" />
        </div>
    </div>
);

export const Home: React.FC<PageWithPrismic> = ({ content }) => {
    const slices = content.data.slices;
    console.log(slices);

    return (
        <Page className="home">
            {slices.map((slice: any, index: number) => (
                <HomeProduct
                    active={true}
                    title={slice.primary.title}
                    subtitle={slice.primary.subtitle}
                    linkToProduct="/docs"
                    key={index}
                >
                    <ul>
                        {slice.items.map((item: any, index: number) => (
                            <li key={index}>
                                <PictoPng
                                    src={item.picto.url}
                                    alt={item.picto.alt}
                                />
                                {item.description}
                            </li>
                        ))}
                    </ul>
                </HomeProduct>
            ))}

            <div className="home__scroll-to-discover">
                <ArrowButtonPicto />
                Scrollez ou cliquez pour découvrir notre second produit :{' '}
                <strong>Mails</strong>
            </div>
        </Page>
    );
};
