import { FCWithChildren } from '../../utils/types';

export const Main: FCWithChildren = ({ children }) => {
    return <main id="app">{children}</main>;
};
