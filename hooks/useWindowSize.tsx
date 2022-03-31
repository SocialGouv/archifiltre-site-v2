import { useState } from 'react';
import { MOBILE_WIDTH } from '../utils/constant';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayout';

interface UseWindowSizeInterface {
    width?: number;
    height?: number;
    isMobile?: boolean;
    center?: number;
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<UseWindowSizeInterface>({
        width: undefined,
        height: undefined,
        isMobile: undefined,
        center: undefined,
    });

    useIsomorphicLayoutEffect(() => {
        const handleResize = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < MOBILE_WIDTH,
                center: window.innerWidth / 2,
            });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
