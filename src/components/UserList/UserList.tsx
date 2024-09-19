import React from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import UserRow from '../UserRow/UserRow';
import { User } from '../../types/types';
import Spinner from '../Spinner/Spinner';

interface UserListProps {
    users: User[];
    selectedUserIds: Set<number>;
    onClickUserRow: (id: number) => void;
    isLoading?: boolean;
    error?: boolean;
}

const ROW_HEIGHT = 64;
const ROW_GAP = 4;

interface RowData {
    users: User[];
    selectedUserIds: Set<number>;
    onClickUserRow: (id: number) => void;
}

const Row: React.FC<ListChildComponentProps<RowData>> = React.memo(
    function Row({ index, style, data }: ListChildComponentProps<RowData>) {
        const { users, selectedUserIds, onClickUserRow } = data;
        const user = users[index];
        const isSelected = selectedUserIds.has(user.id);

        return (
            <div style={{ ...style, paddingBottom: ROW_GAP }}>
                <UserRow
                    user={user}
                    isSelected={isSelected}
                    onClick={onClickUserRow}
                />
            </div>
        );
    }
);

Row.displayName = 'Row';

const renderLoadingState = () => (
    <div className="h-full flex items-center justify-center">
        <Spinner />
    </div>
);

const renderErrorState = () => (
    <div className="h-full flex items-center justify-center">
        <p className="text-red-500">
            Something went wrong. Please try again later.
        </p>
    </div>
);

const renderEmptyState = () => (
    <div className="h-full flex items-center justify-center">
        <p className="text-c-text-gray-50">No users</p>
    </div>
);

const UserList: React.FC<UserListProps> = ({
    isLoading = false,
    error = false,
    users,
    selectedUserIds,
    onClickUserRow,
}) => {
    if (isLoading) return renderLoadingState();
    if (error) return renderErrorState();
    if (users.length === 0) return renderEmptyState();

    return (
        <AutoSizer disableWidth>
            {({ height }) => (
                <List
                    height={height}
                    itemCount={users.length}
                    itemSize={ROW_HEIGHT + ROW_GAP}
                    width="100%"
                    itemData={{ users, selectedUserIds, onClickUserRow }}
                    itemKey={(index) => users[index].id} // Added to prevent the rows from re-rendering on prop change
                >
                    {Row}
                </List>
            )}
        </AutoSizer>
    );
};

export default UserList;
