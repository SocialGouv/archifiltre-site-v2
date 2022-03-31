import type { AppProps } from 'next/app';
import { Layout } from '../components/common/Layout';
import { Main } from '../components/common/Main';
import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Main>
                <Component {...pageProps} />
            </Main>
        </Layout>
    );
};

export default App;
