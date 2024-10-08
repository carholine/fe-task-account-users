import React from 'react';
import { ButtonSize, ButtonVariant } from '../../../types/types';

const variantStyles: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]:
        'bg-c-blue-100 text-white hover:bg-c-blue-200 active:bg-c-blue-300',
    [ButtonVariant.SECONDARY]:
        'text-c-gray-200 bg-white shadow-xs border border-solid border-c-border hover:bg-gray-100 active:bg-gray-200',
};

const iconColors: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'stroke-white',
    [ButtonVariant.SECONDARY]: 'stroke-c-gray-100',
};

const sizes: Record<ButtonSize, string> = {
    [ButtonSize.SM]: 'h-8',
    [ButtonSize.MD]: 'h-10',
};

const disabledStyles: string = `
    opacity-50 cursor-not-allowed pointer-events-none
    bg-gray-300 text-gray-500 border-gray-300
`;

interface ButtonBaseProps {
    variant?: ButtonVariant;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    size?: ButtonSize;
    disabled?: boolean;
}

export type ButtonProps = (
    | { iconLeft: React.FC<React.SVGProps<SVGSVGElement>>; label?: string }
    | { iconLeft?: React.FC<React.SVGProps<SVGSVGElement>>; label: string }
) &
    ButtonBaseProps;

const Button: React.FC<ButtonProps> = ({
    variant = ButtonVariant.PRIMARY,
    label,
    iconLeft: Icon,
    onClick,
    size = ButtonSize.MD,
    disabled = false,
}) => {
    if (!label && !Icon) return null;

    return (
        <button
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={`
                ${variantStyles[variant]} ${sizes[size]} 
                w-fit min-w-8 box-border flex items-center justify-center 
                rounded font-medium text-sm transition duration-150 ease-in-out 
                ${disabled ? disabledStyles : ''}
            `}
            aria-label={label}
            aria-disabled={disabled}
        >
            {!!Icon && (
                <span className="flex items-center px-2">
                    <Icon
                        className={`h-4 ${iconColors[variant]}`}
                        role="presentation"
                    />
                </span>
            )}
            {label && (
                <span className={`${Icon ? 'pr-3' : 'px-3'}`}>{label}</span>
            )}
        </button>
    );
};

export default Button;
