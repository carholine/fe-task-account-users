import React from 'react';
import Button, { ButtonProps } from './Button/Button';
import PencilIcon from '../../assets/pencil.svg?react';
import { ButtonVariant } from '../../types/types';

type EditButtonProps = Omit<ButtonProps, 'variant' | 'label' | 'iconLeft'>;

const EditButton: React.FC<EditButtonProps> = (props) => (
    <Button
        {...props}
        iconLeft={PencilIcon}
        variant={ButtonVariant.SECONDARY}
        label="Edit"
    />
);

export default EditButton;
