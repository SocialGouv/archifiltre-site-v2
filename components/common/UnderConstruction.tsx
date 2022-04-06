import Link from 'next/link';
import { DOCS_SLUG, MAILS_SLUG } from '../../utils/constant';

export const UnderConstruction: React.FC = () => {
    return (
        <div id="construction">
            <h1>Page en construction</h1>
            <Link href={'/'}>
                <a>Homepage</a>
            </Link>
            <Link href={DOCS_SLUG}>
                <a>Docs</a>
            </Link>
            <Link href={MAILS_SLUG}>
                <a>Mails</a>
            </Link>
        </div>
    );
};
