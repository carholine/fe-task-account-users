import React from 'react';
import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
import { ButtonSize } from '../../types/types';

export interface UsersActionsProps {
    selectedCount?: number;
    onEditSelected: () => void;
    onDeleteSelected: () => void;
    className?: string;
    disabled?: boolean;
}

const UsersActions: React.FC<UsersActionsProps> = ({
    selectedCount,
    onEditSelected,
    onDeleteSelected,
    className = '',
    disabled = false,
}) => {
    return (
        <div className={`p-4 flex items-center ${className}`}>
            <span className="text-l font-medium pr-6 text-c-text-hover">
                {selectedCount || 0} users selected
            </span>
            <div className="flex gap-2">
                <EditButton
                    size={ButtonSize.SM}
                    onClick={onEditSelected}
                    disabled={disabled}
                />
                <DeleteButton
                    size={ButtonSize.SM}
                    onClick={onDeleteSelected}
                    compact={false}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default UsersActions;
