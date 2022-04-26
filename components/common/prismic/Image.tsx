import { asImageSrc } from '@prismicio/helpers';
import { ImageField } from '@prismicio/types';
import Image from 'next/image';

interface NextPrismicImageProps {
    field: ImageField;
    height?: number;
    width?: number;
}

export const NextPrismicImage = ({
    field,
    width,
    height,
}: NextPrismicImageProps) => {
    if (!field.url) {
        console.warn('Missing URL for Prismic image', { image: field });
        return null;
    }
    if (!field.alt) {
        console.warn('Missing alt for Prismic image');
        console.log({ image: field });
    }

    const src = asImageSrc(field);

    return (
        <Image
            src={src}
            alt={field.alt ?? 'Prismic image'}
            layout="raw"
            width={width ?? field.dimensions.width}
            height={height ?? field.dimensions.height}
            loading={'lazy'}
        />
    );
};
