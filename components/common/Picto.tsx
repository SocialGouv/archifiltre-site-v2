/* eslint-disable @next/next/no-img-element */
interface PictoPngProps {
    alt: string;
    src: string;
}

export const ArrowButtonPicto: React.FC = () => (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
        <path
            d="M17 6.00102H1.914L7.208 0.706023L6.501 -0.000976562L0 6.50102L6.5 13.001L7.207 12.294L1.914 7.00102L17 7V6.00102Z"
            fill="#232326"
        />
    </svg>
);

// TODO: Switch with next-image + handle prismic element (with null/undefined values)
export const PictoPng: React.FC<PictoPngProps> = ({ src, alt }) => (
    <div className="picto">
        <img src={src} alt={alt} />
    </div>
);
