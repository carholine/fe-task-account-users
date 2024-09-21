import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useFilteredUsers } from './useFilteredUsers';
import { User } from '../../../types/types';

// Avoid debounce timeout
vi.mock('lodash.debounce', () => ({
    default: <T extends (...args: unknown[]) => void>(fn: T) => fn,
}));

const mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'ADMIN' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'ADMIN' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'ADMIN' },
];

describe('useFilteredUsers', () => {
    it('returns the original users list when there is no search term', () => {
        const { result } = renderHook(() =>
            useFilteredUsers(mockUsers, false, false)
        );
        expect(result.current.filteredUsers).toEqual(mockUsers);
    });

    it('returns filtered users based on the search term', () => {
        const { result } = renderHook(() =>
            useFilteredUsers(mockUsers, false, false)
        );

        act(() => {
            result.current.handleSearchChange('bob');
        });

        expect(result.current.filteredUsers).toEqual([
            { id: 2, name: 'Bob', email: 'bob@example.com', role: 'ADMIN' },
        ]);
    });

    it('returns all users when the search term is cleared', () => {
        const { result } = renderHook(() =>
            useFilteredUsers(mockUsers, false, false)
        );

        act(() => {
            result.current.handleSearchChange('charlie');
        });
        expect(result.current.filteredUsers).toEqual([
            {
                id: 3,
                name: 'Charlie',
                email: 'charlie@example.com',
                role: 'ADMIN',
            },
        ]);

        act(() => {
            result.current.handleSearchChange('');
        });
        expect(result.current.filteredUsers).toEqual(mockUsers);
    });

    it('returns the original users list when isLoading is true', () => {
        const { result } = renderHook(() =>
            useFilteredUsers(mockUsers, true, false)
        );
        expect(result.current.filteredUsers).toEqual(mockUsers);
    });

    it('returns the original users list when isError is true', () => {
        const { result } = renderHook(() =>
            useFilteredUsers(mockUsers, false, true)
        );
        expect(result.current.filteredUsers).toEqual(mockUsers);
    });
});
