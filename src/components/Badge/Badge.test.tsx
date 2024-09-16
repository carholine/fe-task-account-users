import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge'; // Adjust the import based on your file structure
import { BadgeVariant } from '../../types/types';

describe('Badge Component', () => {
    it('renders the label correctly', () => {
        render(<Badge variant={BadgeVariant.RED} label="Test Label" />);
        const badgeElement = screen.getByText('Test Label');
        expect(badgeElement).toBeInTheDocument();
    });

    it('applies the correct classes for the RED variant', () => {
        render(<Badge variant={BadgeVariant.RED} label="Red Badge" />);
        const badgeElement = screen.getByText('Red Badge');
        expect(badgeElement).toHaveClass(
            'bg-c-badge-red-50',
            'text-c-badge-red-100'
        );
    });

    it('applies the default classes when no variant is provided', () => {
        render(<Badge label="Default Badge" />);
        const badgeElement = screen.getByText('Default Badge');
        expect(badgeElement).toHaveClass('bg-gray-300', 'text-gray-800');
    });

    it('returns false when no label is provided', () => {
        const { container } = render(
            <Badge variant={BadgeVariant.RED} label="" />
        );
        expect(container.firstChild).toBeNull();
    });
});
