import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Statistic } from '../components/statistic/Statistic';

const StatisticPage: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Statistiques"
                description="Toutes les statistiques d'utilisation de la suite Archifiltre."
            />
            <Statistic />;
        </>
    );
};

export default StatisticPage;
