import Link from 'next/link';
import { ButtonLink } from './Button';
import { Logo } from './Logo';

export const Header: React.FC = () => (
    <header id="header">
        <Logo />
        <nav>
            <Link href="/produits">
                <a className="underline">produits</a>
            </Link>
            <Link href="/qui-sommes-nous">
                <a className="underline">qui sommes-nous ?</a>
            </Link>
            <Link href="/faq">
                <a className="underline">faq</a>
            </Link>
            <Link href="/telechargements">
                <a className="underline">téléchargements</a>
            </Link>
        </nav>

        <div className="header__button">
            <ButtonLink label="co-creation" url="/co-creation" />
        </div>
    </header>
);
