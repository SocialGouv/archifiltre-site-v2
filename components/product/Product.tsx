import { PrismicRichText } from '@prismicio/react';
import {
    ImageField,
    KeyTextField,
    RichTextField,
    SharedSlice,
    SharedSliceVariation,
} from '@prismicio/types';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArchifiltreVersions } from '../../utils';
import {
    SlicedAndCustomPrismicDocument,
    WithPrismicSlicedAndCustomContent,
} from '../../utils/prismic/types';
import { Page } from '../common/Page';
import { PictoPng } from '../common/Picto';

type PanelProps = 'produit' | 'versions';

type ProductSlicePrimary = {
    description: RichTextField;
    picto: ImageField;
    title: KeyTextField;
};

export type ProductSlice = SharedSlice<
    string,
    SharedSliceVariation<string, ProductSlicePrimary>
>;

export type ProductCustomFields = {
    title: KeyTextField;
};

export type ProductProps = WithPrismicSlicedAndCustomContent<
    ProductSlice,
    ProductCustomFields
> & {
    productVersions: ArchifiltreVersions;
};

export type ProductPrismicDocument = SlicedAndCustomPrismicDocument<
    ProductSlice,
    ProductCustomFields
>;

export const Product: React.FC<ProductProps> = ({
    content,
    productVersions,
}) => {
    const timeline = useRef(gsap.timeline());
    const { pathname } = useRouter();
    const [panel, setPanel] = useState<PanelProps>('produit');

    const { title, slices: product } = content.data;
    const isDocs = pathname === '/docs';

    const versions = isDocs ? productVersions.docs : productVersions.mails;

    const createNavItem = (createdPanel: PanelProps) => ({
        label: createdPanel,
        className:
            panel === createdPanel
                ? 'product__sidebar__nav__item active'
                : 'product__sidebar__nav__item',
        onClick: () => {
            setPanel(createdPanel);
            switchPanel();
        },
    });

    const switchPanel = () => {
        const inactive = panel === 'produit' ? 'versions' : 'produit';
        timeline.current
            .to(`[data-panel=${panel}]`, {
                opacity: 0,
            })
            .to(`[data-panel=${inactive}]`, {
                opacity: 1,
            });
    };

    return (
        <Page className="product">
            <div className="product__sidebar">
                <div className="product__sidebar__title">{title}</div>

                <div className="product__sidebar__nav">
                    {[createNavItem('produit'), createNavItem('versions')].map(
                        (item, index) => (
                            <div
                                onClick={item.onClick}
                                className={item.className}
                                key={index}
                            >
                                {item.label}
                            </div>
                        ),
                    )}
                </div>

                <div className="product__sidebar__change">
                    <Link href={isDocs ? '/mails' : '/docs'}>
                        <a>
                            Voir le produit{' '}
                            <strong>{isDocs ? 'Mails' : 'Docs'}</strong>
                        </a>
                    </Link>
                </div>
            </div>
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
            <div className="product__versions" data-panel="versions">
                <div className="product__versions__title">
                    <span>Versions</span>
                </div>
                <div className="product__versions__item__wrapper">
                    {typeof versions === 'string'
                        ? versions
                        : versions?.map((version, index) => (
                              <div
                                  className="product__versions__item"
                                  key={index}
                              >
                                  <div className="product__versions__item__title">
                                      <span>{version.name}</span>
                                  </div>
                                  <div className="product__versions__item__date">
                                      {version.published_at}
                                  </div>
                                  <div className="product__versions__item__changelog">
                                      <ReactMarkdown>
                                          {version.body ?? ''}
                                      </ReactMarkdown>
                                  </div>
                                  <Link href={version.html_url}>
                                      <a
                                          target="_blank"
                                          className="product__versions__item__download underline"
                                      >
                                          Télécharger la version
                                      </a>
                                  </Link>
                              </div>
                          ))}
                </div>
            </div>
        </Page>
    );
};
