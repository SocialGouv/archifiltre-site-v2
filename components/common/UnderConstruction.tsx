import Link from 'next/link';

export const UnderConstruction: React.FC = () => {
    return (
        <div id="construction">
            <h1>Page en construction</h1>
            <Link href={'/'}>
                <a>Homepage</a>
            </Link>
            <Link href={'/docs'}>
                <a>Docs</a>
            </Link>
            <Link href={'/mails'}>
                <a>Mails</a>
            </Link>
        </div>
    );
};
