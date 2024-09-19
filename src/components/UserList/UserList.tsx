import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Spinner from '../Spinner/Spinner';
import { ROW_GAP, ROW_HEIGHT } from './constants';
import { RowContainer, RowData } from './UserListRowContainer';
import { RowsContainer, UserListContext } from './UserListRowsContainer';

type UserListProps = {
    isLoading?: boolean;
    error?: boolean;
    onCheckAllUsers: () => void;
} & RowData;

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
    onCheckAllUsers,
}) => {
    if (isLoading) return renderLoadingState();
    if (error) return renderErrorState();
    if (users.length === 0) return renderEmptyState();

    const areAllUsersSelected = selectedUserIds.size === users.length;

    return (
        <UserListContext.Provider //Context needs to be used to keep the RowsContainer from being re-rendered with the children
            value={{ areAllUsersSelected, onCheckAllUsers }}
        >
            <AutoSizer disableWidth>
                {({ height }) => (
                    <List
                        height={height}
                        itemCount={users.length}
                        itemSize={ROW_HEIGHT + ROW_GAP}
                        width="100%"
                        itemData={{ users, selectedUserIds, onClickUserRow }}
                        itemKey={(index) => users[index].id} // Added to avoid user rows being re-rendered on selection
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
