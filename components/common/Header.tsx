import Link from 'next/link';
import { ButtonLink } from './Button';
import { Logo } from './Logo';

export const Header = () => (
    <header id="header">
        <Logo />
        <nav>
            <Link href="/docs">
                <a className="underline">Docs</a>
            </Link>
            <Link href="/mails">
                <a className="underline">Mails</a>
            </Link>
            <Link href="/qui-sommes-nous">
                <a className="underline">Qui sommes-nous ?</a>
            </Link>
            <Link href="/faq">
                <a className="underline">FAQ</a>
            </Link>
            <Link href="/telechargements">
                <a className="underline">Téléchargements</a>
            </Link>
            <Link href="/stats">
                <a className="underline">Statistiques</a>
            </Link>
            <Link href="/digital-cleanup-day">
                <a className="underline">Digital Cleanup Day</a>
            </Link>
        </nav>

        <div className="header__button">
            <ButtonLink
                className="co-creation-btn"
                label="co-creation"
                url="/co-creation"
            />
        </div>
    </header>
);
