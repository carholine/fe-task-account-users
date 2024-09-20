import React from 'react';
import Button, { ButtonProps } from './Button/Button';
import TrashIcon from '../../assets/trash.svg?react';
import { ButtonVariant } from '../../types/types';

type DeleteButtonProps = Omit<ButtonProps, 'variant' | 'label' | 'iconLeft'> & {
    compact?: boolean;
};

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
    const { compact = true } = props;

    return (
        <Button
            {...props}
            iconLeft={TrashIcon}
            variant={ButtonVariant.SECONDARY}
            label={!compact ? 'Delete' : undefined}
        />
    );
};

export default DeleteButton;
