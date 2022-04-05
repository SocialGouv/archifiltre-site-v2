import { Endpoints } from '@octokit/types';
export const HAS_WINDOW = typeof window !== 'undefined';

export const events = ['scroll', 'wheel', 'touchmove', 'pointermove'];

/**
 * 
    Short of querySelector method.
 */
export const qs = (className: string) => document.querySelector(className);
/**
 * 
    Short of querySelectorAll method.
 */
export const qsa = (className: string) => document.querySelectorAll(className);

export type ArchifiltreProductVersionInfo =
    Endpoints['GET /repos/{owner}/{repo}/releases']['response']['data'];
export type ArchifiltreVersions = {
    mails: ArchifiltreProductVersionInfo | string;
    docs: ArchifiltreProductVersionInfo | string;
};

/**
 * 
   Check if item index is active
 */
export const isIndexActive = (
    activeIndex: number,
    itemIndex: number,
): boolean => activeIndex === itemIndex;

const ERROR_MSG = 'Impossible de récupérer les dernières version de';
export const getVersionsFromGH = async (): Promise<ArchifiltreVersions> =>
    Promise.allSettled([
        fetch(
            `https://api.github.com/repos/SocialGouv/archifiltre-docs/releases`,
        ),
        fetch(
            'https://api.github.com/repos/SocialGouv/archifiltre-mails/releases',
        ),
    ]).then(async ([docsResult, mailsResult]) => {
        const ret = {} as ArchifiltreVersions;
        if (docsResult.status === 'fulfilled') {
            ret.docs = await docsResult.value.json();
        } else {
            ret.docs = `${ERROR_MSG} Docs`;
        }
        if (mailsResult.status === 'fulfilled') {
            ret.mails = await mailsResult.value.json();
        } else {
            ret.mails = `${ERROR_MSG} Mails`;
        }

        return ret;
    });

export const detectOS = (): string => {
    let detectedOS = 'OS Inconnu';

    if (navigator.appVersion.indexOf('Mac') != -1) detectedOS = 'MacOS';
    if (navigator.appVersion.indexOf('Win') != -1) detectedOS = 'Windows';
    if (navigator.appVersion.indexOf('Linux') != -1) detectedOS = 'Linux';

    return detectedOS;
};
