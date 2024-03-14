import * as prismic from '@prismicio/client';
import { LinkResolverFunction } from '@prismicio/helpers';
import { enableAutoPreviews, CreateClientConfig } from '@prismicio/next';
import { apiEndpoint } from '../../prismicConfiguration';

export const Client = (
    config = {} as CreateClientConfig & prismic.ClientConfig,
) => {
    const client = prismic.createClient(apiEndpoint, {
        ...config,
    });

    enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};

export const linkResolver: LinkResolverFunction<string | null> = doc => {
    switch (doc.type) {
        case 'homepage':
            return '/';
        case 'page':
            return `/${doc.uid}`;
        default:
            return null;
    }
};
