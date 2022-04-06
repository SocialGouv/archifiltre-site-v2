import { ImageField } from '@prismicio/types';
import Image from 'next/image';

interface PrismicImageProps {
    height?: number;
    image: ImageField;
    width?: number;
}

export const PrismicImage: React.FC<PrismicImageProps> = ({
    image,
    width,
    height,
}) => {
    if (!image.url) {
        console.warn('Missing URL for Prismic image', { image });
        return null;
    }
    if (!image.alt) {
        console.warn('Missing alt for Prismic image');
        console.log({ image });
    }

    return (
        <Image
            src={image.url}
            alt={image.alt ?? 'Prismic image'}
            layout="raw"
            width={width ?? image.dimensions.width}
            height={height ?? image.dimensions.height}
            loading={'lazy'}
        />
    );
};
