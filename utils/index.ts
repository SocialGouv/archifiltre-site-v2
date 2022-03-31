import gsap from 'gsap';

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
