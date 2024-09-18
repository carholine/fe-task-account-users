import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
    it('should render with checked state when checked prop is true', () => {
        render(<Checkbox checked={true} onChange={() => {}} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('should call onChange with the correct event when clicked', () => {
        const handleChange = vi.fn();
        render(<Checkbox checked={false} onChange={handleChange} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should render CheckIcon when checked', () => {
        const { container } = render(
            <Checkbox checked={true} onChange={() => {}} />
        );
        const checkIcon = container.querySelector('svg');
        expect(checkIcon).toBeInTheDocument();
        expect(checkIcon).toHaveClass('opacity-100');
    });

    it('should not render CheckIcon when unchecked', () => {
        const { container } = render(
            <Checkbox checked={false} onChange={() => {}} />
        );
        const checkIcon = container.querySelector('svg');
        expect(checkIcon).toBeInTheDocument();
        expect(checkIcon).toHaveClass('opacity-0');
    });
});
