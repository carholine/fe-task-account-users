import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Search from './Search';

vi.mock('../../assets/search.svg?react', () => ({
    default: () => (
        <svg data-testid="search-icon" aria-hidden="true" focusable="false" />
    ),
}));

describe('SearchInput Component', () => {
    it('renders correctly with default props', () => {
        const handleChange = vi.fn();

        render(<Search onChange={handleChange} />);

        const inputElement = screen.getByRole('searchbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('id', 'search-input');
        expect(inputElement).toHaveAttribute('type', 'search');
        expect(inputElement).toHaveAttribute('placeholder', 'Search');
        expect(inputElement).toHaveAttribute('aria-label', 'Search');

        const labelElement = screen.getByLabelText('Search');
        expect(labelElement).toBeInTheDocument();

        const iconElement = screen.getByTestId('search-icon');
        expect(iconElement).toBeInTheDocument();
    });

    it('renders correctly with custom props', () => {
        const handleChange = vi.fn();

        render(
            <Search
                id="custom-search"
                value="test value"
                placeholder="Custom Placeholder"
                onChange={handleChange}
                ariaLabel="Custom Search"
                className="custom-class"
            />
        );

        const inputElement = screen.getByRole('searchbox');
        expect(inputElement).toHaveAttribute('id', 'custom-search');
        expect(inputElement).toHaveValue('test value');
        expect(inputElement).toHaveAttribute(
            'placeholder',
            'Custom Placeholder'
        );
        expect(inputElement).toHaveAttribute('aria-label', 'Custom Search');

        const labelElement = screen.getByLabelText('Custom Search');
        expect(labelElement).toBeInTheDocument();

        const container = inputElement.closest('div');
        expect(container).toHaveClass('custom-class');
    });

    it('calls onChange handler when input value changes', () => {
        const handleChange = vi.fn();

        render(<Search onChange={handleChange} />);

        const inputElement = screen.getByRole('searchbox');

        fireEvent.change(inputElement, { target: { value: 'new value' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith('new value');
    });
});
