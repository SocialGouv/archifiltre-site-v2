import * as prismic from '@prismicio/client';
import { PrismicDocument } from '@prismicio/types';
import { apiEndpoint, accessToken, Router } from '../prismicConfiguration';

export type PrismicDocumentType = PrismicDocument<
    Record<string, any>,
    string,
    string
>;

interface PrismicRouter {
    routes: {
        type: string;
        path: string;
    }[];
}

export const Client = () =>
    prismic.createClient(apiEndpoint, createClientOptions(accessToken, Router));

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
