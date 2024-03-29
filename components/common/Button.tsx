import Link from 'next/link';
import { WithChildrenProps } from '../../utils/types';

interface ButtonLinkProps {
    className?: string;
    label: string;
    url: string;
}

interface ButtonCircleProps extends WithChildrenProps {
    onClick?: () => void;
}

export const ButtonLink = ({ label, url, className }: ButtonLinkProps) => {
    return (
        <Link href={url}>
            <a className={className ? `btn-link ${className}` : 'btn-link'}>
                {label}
            </a>
        </Link>
    );
};
export const ButtonDownloadLink = ({
    label,
    className,
    onClick,
}: ButtonLinkProps & { onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className={className ? `btn-link ${className}` : 'btn-link'}
        >
            {label}
        </button>
    );
};

export const ButtonCircle = ({ onClick, children }: ButtonCircleProps) => (
    <button className="btn-circle" onClick={onClick}>
        {children}
    </button>
);
