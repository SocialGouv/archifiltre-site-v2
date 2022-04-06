import { PrismicRichText } from '@prismicio/react';
import { PictoPng } from '../common/Picto';
import { ProductSlice } from './Product';

export const ProductGeneral: React.FC<{
    product: [] | [ProductSlice, ...ProductSlice[]];
}> = ({ product }) => {
    return (
        <div className="product__general" data-panel="produit">
            <div className="product__general__title">
                <span>Produit</span>
            </div>
            {product.map((productInfo, index) => (
                <div className="product__general__item" key={index}>
                    <div className="product__general__item__title">
                        <PictoPng
                            src={productInfo.primary.picto.url ?? ''}
                            alt={productInfo.primary.picto.alt ?? ''}
                        />
                        {productInfo.primary.title}
                    </div>

                    <div className="product__general__item__description">
                        <PrismicRichText
                            field={productInfo.primary.description}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
