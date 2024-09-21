import React, { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../api/users';
import UsersActions from '../../components/UserActions/UserActions';
import UserList from '../../components/UserList/UserList';
import Header from '../../components/Header/Header';

const useUsers = () => {
    const {
        data: users,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 10, // 10 minutes
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
        <div className="flex flex-col h-screen w-screen bg-c-bg-main p-8">
            <Header
                className="h-[58px] flex-shrink-0 pb-4"
                onSearchChange={() => console.log('Search')}
            />
            <main className="flex flex-col flex-grow min-h-0 rounded-lg bg-white px-4">
                <div className="h-[80px] flex-shrink-0">
                    <UsersActions
                        selectedCount={selectedUserIds.size}
                        onDeleteSelected={() => console.log('delete selected')}
                        onEditSelected={() => console.log('edit selected')}
                    />
                </div>
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
