import React from 'react';
import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
import { ButtonSize } from '../../types/types';

export interface UsersActionsProps {
    selectedCount?: number;
    onEditSelected: () => void;
    onDeleteSelected: () => void;
}

const UsersActions: React.FC<UsersActionsProps> = ({
    selectedCount,
    onEditSelected,
    onDeleteSelected,
}) => {
    return (
        <div className="p-4 flex items-center h-full">
            <span className="text-l font-medium pr-6 text-c-text-hover">
                {selectedCount || 0} users selected
            </span>
            <div className="flex gap-2">
                <EditButton size={ButtonSize.SM} onClick={onEditSelected} />
                <DeleteButton
                    size={ButtonSize.SM}
                    onClick={onDeleteSelected}
                    compact={false}
                />
            </div>
        </div>
    );
};

export default UsersActions;
