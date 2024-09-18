import React from 'react';
import { ButtonSize, ButtonVariant } from '../../../types/types';

const variantStyles: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]:
        'bg-c-blue-100 text-white hover:bg-c-blue-200 active:bg-c-blue-300',
    [ButtonVariant.SECONDARY]:
        'text-c-text-gray-100 bg-white shadow-xs border border-solid border-c-border hover:bg-gray-100 active:bg-gray-200',
};

const iconColors: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'stroke-white',
    [ButtonVariant.SECONDARY]: 'stroke-c-text-gray-50',
};

const sizes: Record<ButtonSize, string> = {
    [ButtonSize.SM]: 'h-8 px-1.5',
    [ButtonSize.MD]: 'h-10 px-1',
};

interface BaseProps {
    variant?: ButtonVariant;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    size?: ButtonSize;
}

export type ButtonProps = (
    | { iconLeft: React.FC<React.SVGProps<SVGSVGElement>>; label?: string }
    | { iconLeft?: React.FC<React.SVGProps<SVGSVGElement>>; label: string }
) &
    BaseProps;

const Button: React.FC<ButtonProps> = ({
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
            className={`${variantStyles[variant]} ${sizes[size]} box-border flex items-center justify-center w-fit rounded font-medium text-sm transition duration-150 ease-in-out min-w-8`}
            aria-label={label}
        >
            {!!Icon && (
                <Icon
                    className={`h-4 w-4 ${iconColors[variant]}`}
                    role="presentation"
                />
            )}
            {label && <span className="px-2 tracking-[0.04em]">{label}</span>}
        </button>
    );
};

export default Button;
