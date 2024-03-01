import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPage } from '../services/pirschClient';

const useTrackPage = () => {
    const location = useLocation();

    useEffect(() => {
        trackPage().catch(console.error);
    }, [location.pathname]);
};

export default useTrackPage;
