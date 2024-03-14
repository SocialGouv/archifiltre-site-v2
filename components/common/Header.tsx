import Link from 'next/link';
import { ButtonLink } from './Button';
import { Logo } from './Logo';

export const Header = () => (
    <header id="header">
        <Logo />
        <nav>
            <Link href="/docs" className="underline">Docs</Link>

            <Link href="/mails" className="underline">Mails</Link>

            <Link href="/qui-sommes-nous" className="underline">Qui sommes-nous ?</Link>

            <Link href="/faq" className="underline">FAQ</Link>

            <Link href="/telechargements" className="underline">Téléchargements</Link>

            <Link href="/stats" className="underline">Statistiques</Link>

            <Link href="/digital-cleanup-day" className="underline">Digital Cleanup Day</Link>

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
