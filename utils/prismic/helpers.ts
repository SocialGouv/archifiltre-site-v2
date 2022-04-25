import * as prismic from '@prismicio/client';
import { LinkResolverFunction } from '@prismicio/helpers';
import { enableAutoPreviews, CreateClientConfig } from '@prismicio/next';
import { apiEndpoint, Router } from '../../prismicConfiguration';
import { PrismicRouter } from './types';

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

const createClientOptions = (
    prismicAccessToken: string,
    routes: PrismicRouter,
): prismic.ClientConfig => {
    const accessTokenOption = prismicAccessToken
        ? { accessToken: prismicAccessToken }
        : {};
    const routesOption = routes ? { routes: Router.routes } : {};
    return {
        ...accessTokenOption,
        ...routesOption,
    };
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
