import { WithChildrenProps } from '../../utils/types';

export const Main = ({ children }: WithChildrenProps) => {
    return <main id="app">{children}</main>;
};
