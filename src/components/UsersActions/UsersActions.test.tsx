import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UsersActions from './UsersActions';

describe('UsersActions Component', () => {
    it('renders the correct number of selected users', () => {
        render(
            <UsersActions
                selectedCount={5}
                onEditSelected={() => {}}
                onDeleteSelected={() => {}}
            />
        );

        expect(screen.getByText('5 users selected')).toBeInTheDocument();
    });

    it('renders "0 users selected" when selectedCount is not provided', () => {
        render(
            <UsersActions
                onEditSelected={() => {}}
                onDeleteSelected={() => {}}
            />
        );

        expect(screen.getByText('0 users selected')).toBeInTheDocument();
    });
});
