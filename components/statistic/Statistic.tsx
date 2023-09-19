/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Page } from '../common/Page';

const statsDocs = [
    { label: 'Nombre de téléchargements', size: 20877, date: '' },
    { label: 'Volume total analysé', size: '1293.1 To', date: '' },
    { label: 'Volume total tagué à éliminer', size: '9.1 To', date: '' },
    { label: 'Parcourus en avion', size: '8489 Kms', date: '' },
];

const statsMails = [
    { label: 'Nombre de téléchargements', size: 5614, date: '' },
    { label: 'Nombre de pst déposés', size: 513, date: '' },
    { label: 'Volume total analysé (en mails)', size: 1373449, date: '' },
    { label: 'Volume total tagué à éliminer (en Mo)', size: 12.5, date: '' },
];

type TStat = {
    label: string;
    size: number | string;
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
            <div className="statistics-wrapper">
                <h2>Docs</h2>
                <div className="item-wrapper">
                    {statsDocs.map((stat, index) => (
                        <Stat label={stat.label} size={stat.size} key={index} />
                    ))}
                </div>
                <h3>Utilisations de Docs dans le monde</h3>
                <img
                    src="/assets/map.png"
                    alt="carte de l'utilisation d'Archifiltre Docs dans le monde"
                />
            </div>
            <div className="statistics-wrapper">
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
