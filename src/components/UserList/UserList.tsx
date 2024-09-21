import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Spinner from '../Spinner/Spinner';
import { ROW_GAP, ROW_HEIGHT } from './constants';
import { RowContainer, RowContainerData } from './UserListRowContainer';
import { RowsContainer, UserListContext } from './UserListRowsContainer';

export type UserListProps = {
    isLoading?: boolean;
    error?: boolean;
    onCheckAllUsers: () => void;
} & RowContainerData;

const renderLoadingState = () => (
    <div className="flex-1 flex items-center justify-center">
        <Spinner />
    </div>
);

const renderErrorState = () => (
    <div className="flex-1 flex items-center justify-center">
        <p className="text-red-500">
            Something went wrong. Please try again later.
        </p>
    </div>
);

const renderEmptyState = () => (
    <div className="flex-1 flex items-center justify-center">
        <p className="text-c-gray-100">No users</p>
    </div>
);

const UserList: React.FC<UserListProps> = ({
    isLoading = false,
    error = false,
    users,
    selectedUserIds,
    onClickUserRow,
    onCheckAllUsers,
}) => {
    if (isLoading) return renderLoadingState();
    if (error) return renderErrorState();
    if (users.length === 0) return renderEmptyState();

    const areAllUsersSelected = selectedUserIds.size === users.length;

    return (
        <UserListContext.Provider
            value={{ areAllUsersSelected, onCheckAllUsers }}
        >
            <AutoSizer disableWidth>
                {({ height }) => (
                    <List
                        className="no-scrollbars"
                        height={height}
                        width="100%"
                        itemCount={users.length}
                        itemSize={ROW_HEIGHT + ROW_GAP}
                        itemData={{
                            users,
                            selectedUserIds,
                            onClickUserRow,
                        }}
                        itemKey={(index) => users[index].id}
                        innerElementType={RowsContainer}
                    >
                        {RowContainer}
                    </List>
                )}
            </AutoSizer>
        </UserListContext.Provider>
    );
};

export default UserList;
