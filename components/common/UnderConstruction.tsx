import Link from 'next/link';
import { DOCS_SLUG, MAILS_SLUG } from '../../utils/constant';

export const UnderConstruction = () => {
    return (
        <div id="construction">
            <h1>Page en construction 🚧</h1>
            <Link href="/" className="underline">
                Homepage
            </Link>
            <Link href={DOCS_SLUG} className="underline">
                Docs
            </Link>
            <Link href={MAILS_SLUG} className="underline">
                Mails
            </Link>
        </div>
    );
};
