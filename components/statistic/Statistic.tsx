import { Page } from '../common/Page';

export const Statistic: React.FC = () => (
    <Page className="statistics">
        <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            // TODO: env ou prismic
            src="https://posthog3.lafabriquenumerique.cloud-ed.fr/shared_dashboard/L4M71TMmeZm1ebmfePa5TPj_v92hYA?embedded"
        />
    </Page>
);
