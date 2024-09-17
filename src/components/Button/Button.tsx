import React from 'react';
import { ButtonSize, ButtonVariant } from '../../types/types';

const variantStyles: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]:
        'bg-c-blue-100 text-white hover:bg-c-blue-200 active:bg-c-blue-300',
    [ButtonVariant.SECONDARY]:
        'text-c-text-gray-100 bg-white shadow-xs border border-solid border-c-border hover:bg-gray-100 active:bg-gray-200',
};

const iconColors: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'stroke-white',
    [ButtonVariant.SECONDARY]: 'stroke-c-btn-icon',
};

const sizes: Record<ButtonSize, string> = {
    [ButtonSize.SM]: 'h-8 px-2',
    [ButtonSize.MD]: 'h-10 px-4',
};

interface BaseProps {
    variant?: ButtonVariant;
    onClick: () => void;
    size?: ButtonSize;
}

type Props = (
    | { iconLeft: React.FC<React.SVGProps<SVGSVGElement>>; label?: string }
    | { iconLeft?: React.FC<React.SVGProps<SVGSVGElement>>; label: string }
) &
    BaseProps;

const Button: React.FC<Props> = ({
    variant = ButtonVariant.PRIMARY,
    label,
    iconLeft: Icon,
    onClick,
    size = ButtonSize.MD,
}) => {
    if (!label && !Icon) return null;
    return (
        <button
            onClick={onClick}
            className={`${variantStyles[variant]} ${sizes[size]} flex items-center w-fit rounded font-medium gap-2 text-sm transition duration-150 ease-in-out`}
            aria-label={label}
        >
            {!!Icon && (
                <Icon className={iconColors[variant]} role="presentation" />
            )}
            {label && <span>{label}</span>}
        </button>
    );
};

export default Button;
