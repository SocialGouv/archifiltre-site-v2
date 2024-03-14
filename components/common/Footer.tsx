import Link from 'next/link';
import { ARCHIFILTRE_MAIL_ADDRESS } from '../../utils/constant';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__links">
            <ul>
                <li>
                    <Link href="/mentions-legales" className="underline">
                        Mentions Légales
                    </Link>
                </li>
                <li>
                    <Link
                        href="/politiques-de-confidentialite"
                        className="underline"
                    >
                        Politiques de confidentialité
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://github.com/SocialGouv/archifiltre-docs/wiki/Wiki-Archifiltre"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://form.typeform.com/to/lTwzr0dP"
                        className="underline"
                        target="_blank"
                    >
                        Donnez votre avis
                    </Link>
                </li>
                <li>
                    <Link
                        href={`mailto:${ARCHIFILTRE_MAIL_ADDRESS}`}
                        className="underline"
                        target="_blank"
                    >
                        Nous contacter
                    </Link>
                </li>

                <li>
                    <Link href={'https://twitter.com/archifiltre'}>X</Link>
                </li>
                <li>
                    <Link
                        href={'https://www.linkedin.com/company/archifiltre/'}
                    >
                        Linkedin
                    </Link>
                </li>
                <li>
                    <Link href={'https://www.youtube.com/@archifiltre'}>
                        Youtube
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footer__credits">
            © {new Date().getFullYear()} Archifiltre
            <Link
                href="https://www.fabrique.social.gouv.fr/"
                className="underline"
            >
                Fabrique des ministères sociaux
            </Link>
        </div>
    </footer>
);
