import React, { useState, useCallback } from 'react';
import UsersActions from '../../components/UsersActions/UsersActions';
import UserList from '../../components/UserList/UserList';
import Header from '../../components/Header/Header';
import { useUsers } from './hooks/useUsers';
import { useFilteredUsers } from './hooks/useFilteredUsers';

const AccountUsers: React.FC = () => {
    const { users, isError, isLoading } = useUsers();
    const { filteredUsers, handleSearchChange } = useFilteredUsers(
        users,
        isError,
        isLoading
    );
    const [selectedUserIds, setSelectedUserIds] = useState<Set<number>>(
        new Set()
    );

    const toggleUserSelect = useCallback((userId: number) => {
        setSelectedUserIds((prevSelectedUserIds) => {
            const updatedSet = new Set(prevSelectedUserIds);
            if (updatedSet.has(userId)) {
                updatedSet.delete(userId);
            } else {
                updatedSet.add(userId);
            }
            return updatedSet;
        });
    }, []);

    const onCheckAllUsers = useCallback(() => {
        if (selectedUserIds.size === users?.length) {
            setSelectedUserIds(new Set());
        } else {
            const allIds = users?.map((user) => user.id) || [];
            setSelectedUserIds(new Set(allIds));
        }
    }, [selectedUserIds.size, users]);

    return (
        <div
            className="
            h-screen w-screen min-w-[450px] p-8
            flex flex-col
            bg-c-bg-main"
        >
            <Header
                className="h-[58px] pb-4 flex-shrink-0"
                onSearchChange={handleSearchChange}
                disabled={isLoading || isError}
            />
            <main
                className="
                min-h-0 px-4 pb-4
                flex flex-col flex-grow
                rounded-lg
                bg-white"
            >
                <UsersActions
                    className="h-[80px] flex-shrink-0"
                    selectedCount={selectedUserIds.size}
                    onDeleteSelected={() => console.log('delete selected')}
                    onEditSelected={() => console.log('edit selected')}
                    disabled={isLoading || isError}
                />
                <div className="flex-grow min-h-0">
                    <UserList
                        users={filteredUsers || []}
                        selectedUserIds={selectedUserIds}
                        onClickUserRow={toggleUserSelect}
                        onCheckAllUsers={onCheckAllUsers}
                        loading={isLoading}
                        error={isError}
                        disabled={isLoading || isError}
                    />
                </div>
            </main>
        </div>
    );
};

export default AccountUsers;
