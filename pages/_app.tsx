import type { AppProps } from 'next/app';
import { Header } from '../components/common/Header';
import { Layout } from '../components/common/Layout';
import { Main } from '../components/common/Main';
import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Header />
            <Main>
                <Component {...pageProps} />
            </Main>
        </Layout>
    );
};

export default App;
