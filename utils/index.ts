import { Endpoints } from '@octokit/types';
import { UAParser } from 'ua-parser-js';
import { APP_IMAGE_EXTENSION, DMG_EXTENSION, EXE_EXTENSION } from './constant';

export const HAS_WINDOW = typeof window !== 'undefined';

export const events = ['scroll', 'wheel', 'touchmove', 'pointermove'];

/**
 *
 *
    Short of querySelector method.
 */
export const qs = (className: string) => document.querySelector(className);
/**
 *
    Short of querySelectorAll method.
 */
export const qsa = (className: string) => document.querySelectorAll(className);

// TODO: n products
export type ArchifiltreProductVersionInfo =
    Endpoints['GET /repos/{owner}/{repo}/releases']['response']['data'];
export type ArchifiltreVersions = {
    docs: ArchifiltreProductVersionInfo | string;
    mails: ArchifiltreProductVersionInfo | string;
};

/**
 * Check if item index is active
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
            if (typeof ret.docs === 'string' || !ret.docs.length) {
                ret.docs = `${ERROR_MSG} Docs`;
            }
        } else {
            ret.docs = `${ERROR_MSG} Docs`;
        }
        if (mailsResult.status === 'fulfilled') {
            ret.mails = await mailsResult.value.json();
            if (typeof ret.mails === 'string' || !ret.mails.length) {
                ret.mails = `${ERROR_MSG} Mails`;
            }
        } else {
            ret.mails = `${ERROR_MSG} Mails`;
        }

        return ret;
    });

export const getOSName = () => new UAParser().getOS().name;

export const getDownloadLink = (
    product?: ArchifiltreProductVersionInfo[number],
) => {
    if (product) {
        const os = getOSName();
        const version = product.name?.substring(1);
        const name = product.url.includes('archifiltre-docs')
            ? 'docs'
            : 'mails';
        const url = `https://github.com/SocialGouv/archifiltre-${name}/releases/download/v${version}/archifiltre-${name}-${version}`;

        if (os === 'Mac OS') return url + DMG_EXTENSION;
        if (os === 'Linux') return url + APP_IMAGE_EXTENSION;
        if (os?.startsWith('Windows')) return url + EXE_EXTENSION;
    }
};
