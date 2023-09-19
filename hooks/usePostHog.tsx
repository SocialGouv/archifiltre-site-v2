import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { useEffect } from 'react';

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
        api_host:
            process.env.NEXT_PUBLIC_POSTHOG_HOST ||
            'https://docs.posthog.archifiltre.fr',
        capture_pageview: false,
    });
}

export const usePostHog = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            posthog?.capture('$pageview');
            console.log('pr');
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
};

export const PostHogTracker = () => {
    usePostHog();
    return <></>;
};
