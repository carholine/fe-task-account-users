import React from 'react';
import { User } from '../../types/types';
import { ListChildComponentProps } from 'react-window';
import { HEADER_HEIGHT, ROW_GAP } from './constants';
import UserRow from '../UserRow/UserRow';

export interface RowContainerData {
    users: User[];
    selectedUserIds: Set<number>;
    onClickUserRow: (id: number) => void;
}

/**
 * This component is used for styling the UserRow for when it's used within the list.
 */
export const RowContainer: React.FC<ListChildComponentProps<RowContainerData>> =
    React.memo(function RowContainer({
        index,
        style,
        data,
    }: ListChildComponentProps<RowContainerData>) {
        const { users, selectedUserIds, onClickUserRow } = data;
        const user = users[index];
        const isSelected = selectedUserIds.has(user.id);

        const adjustedStyle = {
            ...style,
            paddingBottom: ROW_GAP, // padding between the rows
            top: (parseFloat(style.top as string) || 0) + HEADER_HEIGHT, // Adjust the position to take into account the header
        };

        return (
            <div style={adjustedStyle}>
                <UserRow
                    user={user}
                    isSelected={isSelected}
                    onClick={onClickUserRow}
                />
            </div>
        );
    });

RowContainer.displayName = 'RowContainer';
