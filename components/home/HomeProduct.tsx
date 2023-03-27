import { getDownloadLink } from '../../utils';
import { WithChildrenProps } from '../../utils/types';
import { ButtonDownloadLink, ButtonLink } from '../common/Button';

interface HomeProductProps extends WithChildrenProps {
    index: number;
    isActive: boolean;
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
    isActive,
}: HomeProductProps) => {
    const download = getDownloadLink(undefined, isDocs ? 'docs' : 'mails');

    return (
        <div
            className={isActive ? 'home__product active' : 'home__product'}
            data-index={index}
            key={title}
        >
            <h1>{title}</h1>

            <h2>{subtitle}</h2>
            {children}
            <div className="home__product__discover">
                <ButtonLink url={linkToProduct} label="découvrir" />
                <ButtonDownloadLink
                    onClick={() => window.open(download)}
                    url={linkToProduct}
                    label="télécharger"
                />
            </div>
            <div className="home__product__social">
                <button onClick={() => window.open('https://www.twitter.com/')}>
                    Twitter
                </button>
                <button
                    onClick={() => window.open('https://www.linkedin.com/')}
                >
                    Linkedin
                </button>
                <button onClick={() => window.open('https://www.youtube.com/')}>
                    Youtube
                </button>
            </div>
        </div>
    );
};
