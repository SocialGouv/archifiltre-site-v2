import Link from 'next/link';

//TODO: customize
const Custom500 = () => {
    return (
        <div id="error">
            <h1>500</h1>
            <p>Hmm... Il n&apos;y a personne ici. Quelques idées :</p>
            <ul>
                <li>
                    <Link href="/" className="underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/docs" className="underline">Docs</Link>

                </li>
                <li>
                    <Link href="/mails" className="underline">Mails</Link>

                </li>
                <li>
                    <Link href="/qui-sommes-nous" className="underline">Qui sommes nous ?</Link>

                </li>
            </ul>
        </div>
    );
};
export default Custom500;
