import Link from 'next/link';

//TODO: customize
const Custom500 = () => {
    return (
        <div id="error">
            <h1>500</h1>
            <p>Hmm... Il n&apos;y a personne ici. Quelques idées :</p>
            <ul>
                <li>
                    <Link href="/">
                        <a className="underline">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/docs">
                        <a className="underline">Docs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/mails">
                        <a className="underline">Mails</a>
                    </Link>
                </li>
                <li>
                    <Link href="/qui-sommes-nous">
                        <a className="underline">Qui sommes nous ?</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Custom500;
