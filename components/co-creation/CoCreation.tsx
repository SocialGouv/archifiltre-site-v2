import Link from 'next/link';
import { Page } from '../common/Page';

export const CoCreation = () => (
    <Page className="co-creation">
        <h1>Co-création</h1>

        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dhGG_-JPo2E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
        <div className="items">
            <div className="item">
                <span>
                    Vous souhaitez connaître la suite ? <br /> Consulter la
                    roadmap !
                </span>
                <Link href="https://github.com/SocialGouv/archifiltre-docs/projects/1">
                    docs
                </Link>
                <Link href="https://github.com/SocialGouv/archifiltre-mails/projects/1">
                    mails
                </Link>
            </div>
            <div className="item">
                <span>
                    Vous voulez contribuez au code ? <br /> Créez une pull
                    request !
                </span>
                <Link href="https://github.com/SocialGouv/archifiltre-docs/pulls">
                    docs
                </Link>
                <Link href="https://github.com/SocialGouv/archifiltre-mails/pulls">
                    mails
                </Link>
            </div>
            <div className="item">
                <span>
                    Vous rencontrez un problème ? <br /> Laissez une issue !
                </span>
                <Link href="https://github.com/SocialGouv/archifiltre-docs/issues">
                    docs
                </Link>
                <Link href="https://github.com/SocialGouv/archifiltre-mails/issues">
                    mails
                </Link>
            </div>
        </div>
    </Page>
);
