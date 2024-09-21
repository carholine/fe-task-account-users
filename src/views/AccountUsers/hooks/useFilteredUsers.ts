import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { User } from '../../../types/types';

export const useFilteredUsers = (
    users: User[] | undefined,
    isLoading: boolean,
    isError: boolean
) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const debouncedSearch = debounce((term: string) => {
        setSearchTerm(term);
    }, 300);

    const handleSearchChange = (value: string) => {
        debouncedSearch(value);
    };

    const filteredUsers = useMemo(() => {
        if (!searchTerm || isLoading || isError) return users;
        const lowercasedTerm = searchTerm.toLowerCase();
        return users?.filter(
            (user) =>
                user.name.toLowerCase().includes(lowercasedTerm) ||
                user.email.toLowerCase().includes(lowercasedTerm)
        );
    }, [searchTerm, users, isLoading, isError]);

    return { filteredUsers, handleSearchChange };
};
