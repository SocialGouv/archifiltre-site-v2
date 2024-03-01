import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';
import { PostHogProvider } from 'posthog-js/react';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Layout } from '../components/common/Layout';
import { Main } from '../components/common/Main';
import { PostHogTracker } from '../hooks/usePostHog';
import { repositoryName } from '../prismicConfiguration';
import '../styles/index.scss';
import { linkResolver } from '../utils/prismic/helpers';
import Script from "next/script";
import useTrackPage from "../src/hooks/useTrackPage";

const App = ({ Component, pageProps }: AppProps) => {
    useTrackPage();
    
    return (
        <PostHogProvider>
            <PostHogTracker />
            <PrismicProvider
                linkResolver={linkResolver}
                internalLinkComponent={({ href, children, ...props }) => (
                    <Link href={href}>
                        <a {...props}>{children}</a>
                    </Link>
                )}
            >
                <PrismicPreview repositoryName={repositoryName}>
                    <Layout>
                        <DefaultSeo
                            canonical="https://archifiltre.fr"
                            titleTemplate="%s | Suite Archifiltre"
                            defaultTitle="Suite Archifiltre"
                            additionalLinkTags={[
                                {
                                    rel: 'icon',
                                    href: 'https://archifiltre.fr/favicon.ico',
                                },
                                {
                                    rel: 'preload',
                                    href: 'https://archifiltre.fr/assets/fonts/Quicksand-Bold.ttf',
                                    as: 'font',
                                    type: 'font/ttf',
                                    crossOrigin: 'anonymous',
                                },
                                {
                                    rel: 'preload',
                                    href: 'https://archifiltre.fr/assets/fonts/Quicksand-Light.ttf',
                                    as: 'font',
                                    type: 'font/ttf',
                                    crossOrigin: 'anonymous',
                                },
                                {
                                    rel: 'preload',
                                    href: 'https://archifiltre.fr/assets/fonts/Quicksand-Medium.ttf',
                                    as: 'font',
                                    type: 'font/ttf',
                                    crossOrigin: 'anonymous',
                                },
                                {
                                    rel: 'preload',
                                    href: 'https://archifiltre.fr/assets/fonts/Inter-Bold.ttf',
                                    as: 'font',
                                    type: 'font/ttf',
                                    crossOrigin: 'anonymous',
                                },
                                {
                                    rel: 'preload',
                                    href: 'https://archifiltre.fr/assets/fonts/Inter-Light.ttf',
                                    as: 'font',
                                    type: 'font/ttf',
                                    crossOrigin: 'anonymous',
                                },
                                {
                                    rel: 'preload',
                                    href: 'https://archifiltre.fr/assets/fonts/Inter-Medium.ttf',
                                    as: 'font',
                                    type: 'font/ttf',
                                    crossOrigin: 'anonymous',
                                },
                            ]}
                            openGraph={{
                                title: 'Suite Archifitre',
                                type: 'website',
                                locale: 'fr_FR',
                                url: 'https://archifiltre.fr',
                                site_name: 'Archifiltre',
                                description:
                                    'Aider les archivistes et les agents des administrations à appréhender et trier des arborescences de fichiers et des messageries complètes.',
                                images: [
                                    {
                                        url: 'https://archifiltre.fr/assets/team_logo.png',
                                        secureUrl:
                                            'https://archifiltre.fr/assets/team_logo.png',
                                        alt: 'Team Logo',
                                        height: 1024,
                                        width: 1024,
                                    },
                                ],
                            }}
                            twitter={{
                                handle: '@archifiltre',
                                site: '@archifiltre',
                                cardType: 'summary_large_image',
                            }}
                        />
                        <Script
                            src="https://api.pirsch.io/pirsch-extended.js"
                            strategy="afterInteractive"
                            id="pirschextendedjs"
                            data-code="uJCmStS991SMh0AyfYDKm8Fxx7gXFu6I"
                        />
                        <Header />
                        <Main>
                            <Component {...pageProps} />
                        </Main>
                        <Footer/>
                    </Layout>
                </PrismicPreview>
            </PrismicProvider>
        </PostHogProvider>
    );
};

export default App;
