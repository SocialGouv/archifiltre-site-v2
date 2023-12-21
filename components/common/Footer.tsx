import Link from 'next/link';
import { ARCHIFILTRE_MAIL_ADDRESS } from '../../utils/constant';

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
                    <Link href={`mailto:${ARCHIFILTRE_MAIL_ADDRESS}`}>
                        <a className="underline" target="_blank">
                            Nous contacter
                        </a>
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
            <Link href="https://www.fabrique.social.gouv.fr/">
                <a className="underline">Fabrique des ministères sociaux</a>
            </Link>
        </div>
    </footer>
);
