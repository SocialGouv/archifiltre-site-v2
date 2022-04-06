import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { DOCS, DOCS_SLUG, MAILS, MAILS_SLUG } from '../../utils/constant';
type PanelProps = 'produit' | 'versions';

export const ProductSidebar: React.FC<{ title: string | null }> = ({
    title,
}) => {
    const timeline = useRef(gsap.timeline());
    const [panel, setPanel] = useState<PanelProps>('produit');
    const { pathname } = useRouter();
    const isDocs = pathname === DOCS_SLUG;

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

    return (
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
                <Link href={isDocs ? MAILS_SLUG : DOCS_SLUG}>
                    <a>
                        Voir le produit <strong>{isDocs ? MAILS : DOCS}</strong>
                    </a>
                </Link>
            </div>
        </div>
    );
};
