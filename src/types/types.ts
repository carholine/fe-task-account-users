export enum BadgeVariant {
    RED = 'RED',
    BLUE = 'BLUE',
    PURPLE = 'PURPLE',
    YELLOW = 'YELLOW',
    DEFAULT = 'DEFAULT',
}

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum ButtonSize {
    SM = 'sm',
    MD = 'md',
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    role: string;
}
