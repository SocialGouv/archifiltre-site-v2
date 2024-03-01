import { useEffect } from 'react';
import Router from 'next/router';
import { trackPage } from '../services/pirschClient';

const useTrackPage = () => {
    useEffect(() => {
        const handleRouteChange = () => {
            trackPage().catch(console.error);
        };

        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
};

export default useTrackPage;
