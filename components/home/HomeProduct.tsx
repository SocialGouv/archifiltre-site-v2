import { WithChildrenProps } from '../../utils/types';
import { ButtonLink } from '../common/Button';

interface HomeProductProps extends WithChildrenProps {
    index: number;
    linkToProduct: string;
    subtitle: string;
    title: string;
}

export const HomeProduct = ({
    title,
    subtitle,
    linkToProduct,
    children,
    index,
}: HomeProductProps) => (
    <div className="home__product" data-index={index}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {children}
        <div className="home__product__discover">
            <ButtonLink url={linkToProduct} label="découvrir" />
        </div>
    </div>
);
