import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface ButtonLinkProps {
    className?: string;
    label: string;
    url: string;
}

interface _ButtonCircleProps {
    onClick?: () => void;
}

type ButtonCircleProps = PropsWithChildren<_ButtonCircleProps>;

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

export const ButtonCircle: React.FC<ButtonCircleProps> = ({
    onClick,
    children,
}) => (
    <button className="btn-circle" onClick={onClick}>
        {children}
    </button>
);
