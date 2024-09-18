import React from 'react';
import { BadgeVariant, ButtonSize, User } from '../../types/types';
import Checkbox from '../Checkbox/Checkbox';
import Avatar from '../Avatar/Avatar';
import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
import Badge from '../Badge/Badge';

const roleColors: { [key: string]: BadgeVariant } = {
    ADMIN: BadgeVariant.PURPLE,
    ACCOUNT_MANAGER: BadgeVariant.RED,
    AGENT: BadgeVariant.BLUE,
    EXTERNAL_REVIEWER: BadgeVariant.YELLOW,
};

interface Props {
    user: User;
    isSelected: boolean;
    onClick: (id: number) => void;
    dataTestIds?: {
        row?: string;
        nameColumn?: string;
        permissionsColumn?: string;
        actionsColumn?: string;
    };
}

export const formatRole = (role: string) => {
    if (!role) return role;
    return role
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/^\w/, (char) => char.toUpperCase());
};

const UserRow: React.FC<Props> = ({
    user,
    isSelected,
    onClick,
    dataTestIds,
}) => {
    const handleRowClick = () => {
        onClick(user.id);
    };

    const renderNameColumn = () => (
        <div
            className="min-w-16 gap-3 flex items-center overflow-hidden"
            data-testid={dataTestIds?.nameColumn}
        >
            <Checkbox checked={isSelected} />
            {!!user.avatar && <Avatar src={user.avatar} alt={user.name} />}
            <div className="flex-1 truncate">
                <div className="font-medium tracking-[-0.025em] truncate group-hover:text-c-text-hover">
                    {user.name}
                </div>
                <div className="text-c-text-secondary text-sm tracking-[0.04em] truncate">
                    {user.email}
                </div>
            </div>
        </div>
    );

    const renderPermissionsColumn = () => (
        <div
            className="flex items-center justify-start truncate"
            data-testid={dataTestIds?.permissionsColumn}
        >
            <Badge
                variant={roleColors[user.role] || BadgeVariant.DEFAULT}
                label={formatRole(user.role)}
            />
        </div>
    );

    const renderActionsColumn = () => (
        <div
            className="flex items-center justify-end gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            data-testid={dataTestIds?.actionsColumn}
        >
            <EditButton
                size={ButtonSize.SM}
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('Edit user');
                }}
            />
            <DeleteButton
                size={ButtonSize.SM}
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('Delete user');
                }}
            />
        </div>
    );

    return (
        <div
            onClick={handleRowClick}
            data-testid={dataTestIds?.row}
            className={`
                h-16 pl-3 pr-6 
                flex items-center box-border group
                grid grid-cols-3col
                transition-colors duration-200 ease-in-out
                rounded border-l-4
                cursor-pointer
                ${isSelected ? 'bg-c-bg-gray border-l-c-blue-100' : 'hover:bg-c-bg-gray border-l-transparent'}`}
        >
            {renderNameColumn()}
            {renderPermissionsColumn()}
            {renderActionsColumn()}
        </div>
    );
};

export default UserRow;
