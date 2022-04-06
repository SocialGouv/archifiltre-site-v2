/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export const Footer: React.FC = () => (
    <footer className="footer">
        <div className="footer__links">
            <ul>
                <li>
                    <Link href="/mentions-legales">Mentions Légales</Link>
                </li>
                <li>
                    <Link href="/politiques-de-confidentialite">
                        Politiques de confidentialité
                    </Link>
                </li>
                <li>
                    <Link href="/mentions-legales">
                        <a
                            href="https://github.com/SocialGouv/archifiltre-docs/wiki/Wiki-Archifiltre"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </Link>
                </li>
                <li>
                    <Link href="/mentions-legales">Donnez votre avis</Link>
                </li>
                <li>
                    <Link href="/mentions-legales">
                        <a href="mailto:archifiltre@sg.social.gouv.fr">
                            Nous contacter
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footer__credits">
            © 2022 Archifiltre
            <Link href={'https://www.fabrique.social.gouv.fr/'}>
                Fabrique des ministères sociaux
            </Link>
        </div>
        <div className="footer__vercel">
            <Link
                href="https://vercel.com/?utm_source=archifiltre&utm_campaign=oss"
                passHref
            >
                <a target="_blank">
                    <img src="/assets/vercel-powered.svg" alt="vercel-logo" />
                </a>
            </Link>
        </div>
    </footer>
);
