import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { PageWithPrismic } from '../../pages';
import { versionsStore } from '../../store/VersionsStore';
import { getVersionsFromGH } from '../../utils';
import { Page } from '../common/Page';
import { PictoPng } from '../common/Picto';

type PanelProps = 'produit' | 'versions';

export const Product: React.FC<PageWithPrismic> = ({ content }) => {
    const timeline = useRef(gsap.timeline());
    const { pathname } = useRouter();
    const [panel, setPanel] = useState<PanelProps>('produit');
    const { productsVersions, setProductsVersions } = versionsStore();

    const { title, slices } = content.data;
    const product = slices;
    const isDocs = pathname === '/docs';
    const versions = isDocs ? productsVersions.docs : productsVersions.mails;

    useIsomorphicLayoutEffect(() => {
        !productsVersions.docs.length && getVersionsFromGH(setProductsVersions);
    }, []);

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

    if (!productsVersions.docs) return null;

    return (
        <Page className="product">
            <div className="product__sidebar">
                <div className="product__sidebar__title">{title}</div>

                <div className="product__sidebar__nav">
                    {[createNavItem('produit'), createNavItem('versions')].map(
                        (item, index: number) => (
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
                {product.map((productInfo: any, index: number) => (
                    <div className="product__general__item" key={index}>
                        <div className="product__general__item__title">
                            <PictoPng
                                src={productInfo.primary.picto.url}
                                alt={productInfo.primary.picto.alt}
                            />
                            {productInfo.primary.title}
                        </div>

                        <div className="product__general__item__description">
                            {productInfo.primary.description[0].text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="product__versions" data-panel="versions">
                <div className="product__versions__title">
                    <span>Versions</span>
                </div>
                <div className="product__versions__item__wrapper">
                    {versions?.map((version: any, index: number) => (
                        <div className="product__versions__item" key={index}>
                            <div className="product__versions__item__title">
                                <span>{version.name}</span>
                            </div>
                            <div className="product__versions__item__date">
                                {version.published_at}
                            </div>
                            <div className="product__versions__item__changelog">
                                <ReactMarkdown>{version.body}</ReactMarkdown>
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
