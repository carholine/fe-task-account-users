import React from 'react';
import { BadgeVariant } from '../../types/types';

const variantColors: Record<BadgeVariant, string> = {
    [BadgeVariant.RED]: 'bg-c-badge-red-50 text-c-badge-red-100',
    [BadgeVariant.BLUE]: 'bg-c-badge-blue-50 text-c-badge-blue-100',
    [BadgeVariant.PURPLE]: 'bg-c-badge-purple-50 text-c-badge-purple-100',
    [BadgeVariant.YELLOW]: 'bg-c-badge-yellow-50 text-c-badge-yellow-100',
    [BadgeVariant.DEFAULT]: 'bg-gray-300 text-gray-800',
};

interface Props {
    variant?: BadgeVariant;
    label: string;
}

const Badge: React.FC<Props> = ({ variant = BadgeVariant.DEFAULT, label }) => {
    if (!label) return false;
    return (
        <span
            className={`${variantColors[variant]} w-fit text-xs py-[3px] px-2 rounded font-medium`}
        >
            {label}
        </span>
    );
};

export default Badge;
