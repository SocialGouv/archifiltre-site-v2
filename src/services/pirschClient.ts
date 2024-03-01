import { Pirsch } from "pirsch-sdk/web";

const identificationCode: string = "uJCmStS991SMh0AyfYDKm8Fxx7gXFu6I";
const client = new Pirsch({ identificationCode });

export const trackPageView = async (): Promise<void> => {
    await client.hit();
};

export const trackEvent = async (name: string, duration: number = 60, metadata: Record<string, any> = {}): Promise<void> => {
    await client.event(name, duration, metadata);
};

export const trackPage = async (): Promise<void> => {
    await client.hit();
};
