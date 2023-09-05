import { FC } from 'react';
import { Page } from '../common/Page';

const statsDocs = [
    { label: 'Nombre de téléchargements', size: 20877 },
    { label: 'Volume total analysé (To)', size: 1293.1 },
    { label: 'Volume total tagué à éliminer (To)', size: 9.1 },
];

const statsMails = [
    { label: 'Nombre de téléchargements', size: 5614 },
    { label: 'Nombre de pst déposés', size: 513 },
    { label: 'Volume total analysé (en mails)', size: 1373449 },
    { label: 'Volume total tagué à éliminer (en Mo)', size: 12.5 },
];

type TStat = {
    label: string;
    size: number;
};

const Stat: FC<TStat> = ({ size, label }) => {
    return (
        <div className="item">
            <span>{size}</span>
            <span>{label}</span>
        </div>
    );
};

export const Statistic = () => {
    return (
        <Page className="statistics">
            <h1>Statistiques</h1>
            <div className="wrapper">
                <h2>Docs</h2>
                <div className="item-wrapper">
                    {statsDocs.map((stat, index) => (
                        <Stat label={stat.label} size={stat.size} key={index} />
                    ))}
                </div>
            </div>
            <div className="wrapper">
                <h2>Mails</h2>
                <div className="item-wrapper">
                    {statsMails.map((stat, index) => (
                        <Stat label={stat.label} size={stat.size} key={index} />
                    ))}
                </div>
            </div>
        </Page>
    );
};
