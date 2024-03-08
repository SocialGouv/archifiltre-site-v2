import { Endpoints } from '@octokit/types';
import { UAParser } from 'ua-parser-js';
import {
    DMG_EXTENSION_MAILS_FIX,
    APP_IMAGE_EXTENSION_MAILS_FIX,
    EXE_EXTENSION_MAILS_FIX,
    APP_IMAGE_EXTENSION_DOCS_FIX,
    DMG_EXTENSION_DOCS_FIX,
    EXE_EXTENSION_DOCS_FIX,
} from './constant';
import { BASE_URL_MAILS, BASE_URLS_DOCS } from './downloadLink';

export const HAS_WINDOW = typeof window !== 'undefined';

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
            'https://api.github.com/repos/SocialGouv/archifiltre-docs/releases',
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
    currentProduct?: 'docs' | 'mails',
) => {
    if (product || currentProduct) {
        const os = getOSName();
        const name = product
            ? product?.url.includes('archifiltre-docs')
                ? 'docs'
                : 'mails'
            : currentProduct;

        if (name === 'mails') {
            if (os === 'Mac OS') {
                return BASE_URL_MAILS + DMG_EXTENSION_MAILS_FIX;
            }
            if (os === 'Linux') {
                return BASE_URL_MAILS + APP_IMAGE_EXTENSION_MAILS_FIX;
            }
            if (os?.startsWith('Windows')) {
                return BASE_URL_MAILS + EXE_EXTENSION_MAILS_FIX;
            }
        }

        if (os === 'Mac OS') {
            return BASE_URLS_DOCS + DMG_EXTENSION_DOCS_FIX;
        }
        if (os === 'Linux') {
            return BASE_URLS_DOCS + APP_IMAGE_EXTENSION_DOCS_FIX;
        }
        if (os?.startsWith('Windows')) {
            return BASE_URLS_DOCS + EXE_EXTENSION_DOCS_FIX;
        }
    }
};
