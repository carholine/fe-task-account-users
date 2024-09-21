import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../../api/users';

const QUERY_CACHE_STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const useUsers = () => {
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
