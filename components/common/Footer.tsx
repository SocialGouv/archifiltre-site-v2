import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__links">
            <ul>
                <li>
                    <Link href="/mentions-legales">
                        <a className="underline">Mentions Légales</a>
                    </Link>
                </li>
                <li>
                    <Link href="/politiques-de-confidentialite">
                        <a className="underline">
                            Politiques de confidentialité
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/SocialGouv/archifiltre-docs/wiki/Wiki-Archifiltre">
                        <a
                            className="underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://form.typeform.com/to/lTwzr0dP">
                        <a className="underline" target="_blank">
                            Donnez votre avis
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="mailto:contact@archifiltre.fr">
                        <a className="underline" target="_blank">
                            Nous contacter
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footer__credits">
            © {new Date().getFullYear()} Archifiltre
            <Link href="https://www.fabrique.social.gouv.fr/">
                <a className="underline">Fabrique des ministères sociaux</a>
            </Link>
        </div>
        <div
            className="footer__vercel"
            // TODO: position bottom
        >
            <Link
                href="https://vercel.com/?utm_source=archifiltre&utm_campaign=oss"
                passHref
            >
                <a target="_blank">
                    <Image
                        src="/assets/vercel-powered.svg"
                        alt="vercel-logo"
                        width={212}
                        height={44}
                    />
                </a>
            </Link>
        </div>
    </footer>
);
