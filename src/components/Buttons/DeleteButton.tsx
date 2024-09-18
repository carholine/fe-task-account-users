import React from 'react';
import Button, { ButtonProps } from './Button/Button';
import TrashIcon from '../../assets/trash.svg?react';
import { ButtonVariant } from '../../types/types';

type DeleteButtonProps = Omit<ButtonProps, 'variant' | 'label' | 'iconLeft'>;

const DeleteButton: React.FC<DeleteButtonProps> = (props) => (
    <Button {...props} iconLeft={TrashIcon} variant={ButtonVariant.SECONDARY} />
);

export default DeleteButton;
