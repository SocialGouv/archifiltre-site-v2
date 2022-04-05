import * as prismic from '@prismicio/client';
import { apiEndpoint, accessToken, Router } from '../../prismicConfiguration';
import { PrismicRouter } from './types';

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
