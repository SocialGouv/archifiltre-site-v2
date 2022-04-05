import create from 'zustand';

export interface ProductsVersion {
    mails: Record<string, string | number>[];
    docs: Record<string, string | number>[];
}

interface VersionStoreProps {
    productsVersions: ProductsVersion;
}

export const versionsStore = create(set => ({
    productsVersions: {
        mails: [],
        docs: [],
    },
    setProductsVersions: (productsVersions: ProductsVersion) =>
        set({ productsVersions }),
}));
