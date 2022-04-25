import Link from 'next/link';
import { DOCS_SLUG, MAILS_SLUG } from '../../utils/constant';

export const UnderConstruction = () => {
    return (
        <div id="construction">
            <h1>Page en construction 🚧</h1>
            <Link href="/">
                <a className="underline">Homepage</a>
            </Link>
            <Link href={DOCS_SLUG}>
                <a className="underline">Docs</a>
            </Link>
            <Link href={MAILS_SLUG}>
                <a className="underline">Mails</a>
            </Link>
        </div>
    );
};
