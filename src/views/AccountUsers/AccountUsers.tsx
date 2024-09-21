import React, { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../api/users';
import UsersActions from '../../components/UserActions/UserActions';
import UserList from '../../components/UserList/UserList';
import Header from '../../components/Header/Header';

const QUERY_CACHE_STALE_TIME = 1000 * 60 * 5; // 5 minutes

const useUsers = () => {
    const {
        data: users,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: QUERY_CACHE_STALE_TIME,
    });

    return { users, isLoading, isError };
};

const AccountUsers: React.FC = () => {
    const { users, isLoading, isError } = useUsers();
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
                onSearchChange={() => console.log('Search')}
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
                />
                <div className="flex-grow min-h-0">
                    <UserList
                        users={users || []}
                        selectedUserIds={selectedUserIds}
                        onClickUserRow={toggleUserSelect}
                        onCheckAllUsers={onCheckAllUsers}
                        isLoading={isLoading}
                        error={isError}
                    />
                </div>
            </main>
        </div>
    );
};

export default AccountUsers;
