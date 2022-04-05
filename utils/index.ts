import gsap from 'gsap';
import { ProductsVersion } from '../store/VersionsStore';

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
/**
 * 
    Short of gsap toArray utils method to get a proper DOM elements array.
 */
export const gqsa = (className: string) => gsap.utils.toArray(className);

/**
 * 
   Check if item index is active
 */
export const isIndexActive = (
    activeIndex: number,
    itemIndex: number,
): boolean => activeIndex === itemIndex;

export const getVersionsFromGH = (
    storeSetter: (versions: ProductsVersion) => void,
) => {
    Promise.all([
        fetch(
            `https://api.github.com/repos/SocialGouv/archifiltre-docs/releases`,
        ),
        fetch(
            'https://api.github.com/repos/SocialGouv/archifiltre-mails/releases',
        ),
    ])
        .then(async ([docsData, mailsData]) => {
            const docs = await docsData.json();
            const mails = await mailsData.json();

            storeSetter({
                docs,
                mails,
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const detectOS = (): string => {
    let detectedOS = 'OS Inconnu';

    if (navigator.appVersion.indexOf('Mac') != -1) detectedOS = 'MacOS';
    if (navigator.appVersion.indexOf('Win') != -1) detectedOS = 'Windows';
    if (navigator.appVersion.indexOf('Linux') != -1) detectedOS = 'Linux';

    return detectedOS;
};
