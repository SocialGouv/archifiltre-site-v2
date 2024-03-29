import { getDownloadLink } from '../../utils';
import { WithChildrenProps } from '../../utils/types';
import { ButtonDownloadLink, ButtonLink } from '../common/Button';

interface HomeProductProps extends WithChildrenProps {
    index: number;
    isDocs: boolean;
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
    isDocs,
}: HomeProductProps) => {
    const download = getDownloadLink(undefined, isDocs ? 'docs' : 'mails');

    return (
        <div className="home__product active" data-index={index} key={title}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {children}
            <div className="home__product__discover__wrapper">
                <div className="home__product__discover">
                    <h3>Docs</h3>
                    <div className="home__product__discover__btn">
                        <ButtonLink url={linkToProduct} label="découvrir" />
                        <ButtonDownloadLink
                            onClick={() => window.open(download)}
                            url={linkToProduct}
                            label="télécharger"
                        />
                    </div>
                </div>
                <div className="home__product__discover">
                    <h3>Mails</h3>
                    <div className="home__product__discover__btn">
                        <ButtonLink url={'mails'} label="découvrir" />
                        <ButtonDownloadLink
                            onClick={() => window.open(download)}
                            url={linkToProduct}
                            label="télécharger"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
