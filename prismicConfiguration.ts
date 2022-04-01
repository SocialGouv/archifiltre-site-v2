import * as prismic from '@prismicio/client';

export const REPOSITORY_NAME = 'archifiltre-backoffice';

export const apiEndpoint = prismic.getRepositoryEndpoint(REPOSITORY_NAME);

export const accessToken = process.env.PRISMIC_ACCESS_TOKEN as string;

export const Router = {
    routes: [
        {
            type: 'homepage',
            path: '/:uid',
        },
    ],
};
