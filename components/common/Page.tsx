interface PageProps {
    className: string;
}

export const Page: React.FC<PageProps> = ({ children, className }) => {
    return (
        <section id="page" className={className}>
            {children}
        </section>
    );
};
