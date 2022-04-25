import { WithChildrenProps } from '../../utils/types';

interface PageProps extends WithChildrenProps {
    className: string;
}

export const Page = ({ children, className }: PageProps) => {
    return (
        <section id="page" className={className}>
            {children}
        </section>
    );
};
