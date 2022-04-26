import * as prismic from '@prismicio/client';
import sm from './sm.json';

export const apiEndpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(apiEndpoint);

export const accessToken = process.env.PRISMIC_ACCESS_TOKEN!;

export const Router = {
    routes: [
        {
            type: 'homepage',
            path: '/:uid',
        },
    ],
};
