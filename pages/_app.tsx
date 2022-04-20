import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Layout } from '../components/common/Layout';
import { Main } from '../components/common/Main';
import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
    return (
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
            <Header />
            <Main>
                <Component {...pageProps} />
            </Main>
            <Footer />
        </Layout>
    );
};

export default App;
