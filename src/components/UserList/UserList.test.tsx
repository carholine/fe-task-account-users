import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import UserList from './UserList';
import { User } from '../../types/types';

const mockUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'ADMIN' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'AGENT' },
    {
        id: 3,
        name: 'Alice Smith',
        email: 'alice@example.com',
        role: 'EXTERNAL_REVIEWER',
    },
];

const selectedUserIds = new Set<number>([1]);
const onClickUserRow = vi.fn();

describe('UserList component', () => {
    beforeAll(() => {
        vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(
            1500
        );
        vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(
            1500
        );
    });

    it('renders the correct number of UserRow components', () => {
        render(
            <UserList
                users={mockUsers}
                selectedUserIds={selectedUserIds}
                onClickUserRow={onClickUserRow}
            />
        );
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
        expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    });

    it('renders a spinner when loading', () => {
        render(
            <UserList
                users={[]}
                selectedUserIds={new Set<number>()}
                onClickUserRow={onClickUserRow}
                isLoading={true}
            />
        );
        expect(document.querySelector('.spinner')).toBeInTheDocument();
    });

    it('renders an error message when there is an error', () => {
        render(
            <UserList
                users={[]}
                selectedUserIds={new Set<number>()}
                onClickUserRow={onClickUserRow}
                error={true}
            />
        );
        expect(
            screen.getByText('Something went wrong. Please try again later.')
        ).toBeInTheDocument();
    });

    it('renders "No users" when there are no users', () => {
        render(
            <UserList
                users={[]}
                selectedUserIds={new Set<number>()}
                onClickUserRow={onClickUserRow}
            />
        );
        expect(screen.getByText('No users')).toBeInTheDocument();
    });
});
