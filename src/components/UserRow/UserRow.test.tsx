import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UserRow, { formatRole } from './UserRow';

describe('UserRow Component', () => {
    const mockUser = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'avatar.png',
        role: 'ACCOUNT_MANAGER',
    };

    it('should render user row', () => {
        render(
            <UserRow
                user={mockUser}
                isSelected={false}
                onClick={() => {}}
                dataTestIds={{ row: 'user-row' }}
            />
        );
        const row = screen.getByTestId('user-row');
        expect(row).toBeInTheDocument();
    });

    it('should call onClick with the correct user ID when clicked', () => {
        const handleClick = vi.fn();
        render(
            <UserRow
                user={mockUser}
                isSelected={false}
                onClick={handleClick}
                dataTestIds={{ row: 'user-row' }}
            />
        );
        const row = screen.getByTestId('user-row');
        fireEvent.click(row);
        expect(handleClick).toHaveBeenCalledWith(mockUser.id);
    });

    it('should apply selected styles when isSelected is true', () => {
        render(
            <UserRow
                user={mockUser}
                isSelected={true}
                onClick={() => {}}
                dataTestIds={{ row: 'user-row' }}
            />
        );
        const row = screen.getByTestId('user-row');
        expect(row).toHaveClass('bg-c-bg-gray border-l-c-blue-100');
    });

    it('should render the name column with the correct data', () => {
        render(
            <UserRow
                user={mockUser}
                isSelected={false}
                onClick={() => {}}
                dataTestIds={{ nameColumn: 'name-column' }}
            />
        );
        const nameColumn = screen.getByTestId('name-column');
        expect(nameColumn).toBeInTheDocument();
        expect(nameColumn).toHaveTextContent('John Doe');
        expect(nameColumn).toHaveTextContent('john.doe@example.com');
    });

    it('should render the permissions column with the correct data', () => {
        render(
            <UserRow
                user={mockUser}
                isSelected={false}
                onClick={() => {}}
                dataTestIds={{ permissionsColumn: 'permissions-column' }}
            />
        );
        const permissionsColumn = screen.getByTestId('permissions-column');
        expect(permissionsColumn).toBeInTheDocument();
        expect(permissionsColumn).toHaveTextContent('Account manager');
    });

    it('should render the actions column with correct visibility on hover', () => {
        render(
            <UserRow
                user={mockUser}
                isSelected={false}
                onClick={() => {}}
                dataTestIds={{
                    row: 'user-row',
                    actionsColumn: 'actions-column',
                }}
            />
        );
        const actionsColumn = screen.getByTestId('actions-column');
        const rowElement = screen.getByTestId('user-row');

        expect(actionsColumn).toBeInTheDocument();
        expect(actionsColumn).toHaveClass('invisible');

        fireEvent.mouseOver(rowElement);
        setTimeout(() => {
            expect(actionsColumn).toHaveClass('visible');
        }, 100); // CSS transition delay
    });
});

describe('formatRole Function', () => {
    it('should format a role with underscores to title case', () => {
        const result = formatRole('ACCOUNT_MANAGER');
        expect(result).toBe('Account manager');
    });

    it('should return an empty string when given an empty string', () => {
        const result = formatRole('');
        expect(result).toBe('');
    });

    it('should format a role with no underscores correctly', () => {
        const result = formatRole('admin');
        expect(result).toBe('Admin');
    });

    it('should handle a role with multiple underscores', () => {
        const result = formatRole('EXTERNAL_REVIEWER_ROLE');
        expect(result).toBe('External reviewer role');
    });
});
