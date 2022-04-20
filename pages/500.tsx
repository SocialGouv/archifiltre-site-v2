import Link from 'next/link';

const Custom500 = () => {
    return (
        <div id="error">
            <h1>500</h1>
            <p>Hmm... Il n&apos;y a personne ici. Quelques idées :</p>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/docs">Docs</Link>
                </li>
                <li>
                    <Link href="/mails">Mails</Link>
                </li>
                <li>
                    <Link href="/qui-sommes-nous">Qui sommes nous ?</Link>
                </li>
            </ul>
        </div>
    );
};
export default Custom500;
