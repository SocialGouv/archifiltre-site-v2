import Link from 'next/link';

interface ButtonLinkProps {
    label: string;
    url: string;
    className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    label,
    url,
    className,
}) => {
    return (
        <Link href={url}>
            <a className={className ? `btn-link ${className}` : 'btn-link'}>
                {label}
            </a>
        </Link>
    );
};
