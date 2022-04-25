import { ImageField } from '@prismicio/types';
import { NextPrismicImage } from './prismic/Image';

interface PictoPngProps {
    image: ImageField;
}

export const ArrowButtonPicto = () => (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
        <path
            d="M17 6.00102H1.914L7.208 0.706023L6.501 -0.000976562L0 6.50102L6.5 13.001L7.207 12.294L1.914 7.00102L17 7V6.00102Z"
            fill="#232326"
        />
    </svg>
);

export const PictoPng = ({ image }: PictoPngProps) => (
    <div className="picto">
        <NextPrismicImage field={image} width={20} height={20} />
    </div>
);
