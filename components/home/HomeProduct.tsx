import { ButtonLink } from '../common/Button';

interface HomeProductProps {
    index: number;
    linkToProduct: string;
    subtitle: string;
    title: string;
}

export const HomeProduct: React.FC<HomeProductProps> = ({
    title,
    subtitle,
    linkToProduct,
    children,
    index,
}) => (
    <div className="home__product" data-index={index}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {children}
        <div className="home__product__discover">
            <ButtonLink url={linkToProduct} label="découvrir" />
        </div>
    </div>
);
