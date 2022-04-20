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
                title="Suite Archifiltre"
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon.ico',
                    },
                ]}
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
