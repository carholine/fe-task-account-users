import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';
import { ButtonSize, ButtonVariant } from '../../types/types';

const MockIcon = () => <svg data-testid="mock-icon" />;

describe('Button Component', () => {
    it('renders with an icon and label', () => {
        render(
            <Button
                iconLeft={MockIcon}
                label="Click me"
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.MD}
                onClick={() => {}}
            />
        );

        expect(screen.getByText('Click me')).toBeInTheDocument();
        expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    });

    it('renders with only an icon', () => {
        render(
            <Button
                iconLeft={MockIcon}
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.SM}
                onClick={() => {}}
            />
        );

        expect(screen.queryByText('Click me')).not.toBeInTheDocument();
        expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    });

    it('renders with only a label', () => {
        render(
            <Button
                label="Click me"
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.SM}
                onClick={() => {}}
            />
        );

        expect(screen.getByText('Click me')).toBeInTheDocument();
        expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument();
    });

    it('calls onClick handler when button is clicked', () => {
        const onClick = vi.fn();
        render(<Button label="Click me" onClick={onClick} />);

        fireEvent.click(screen.getByText('Click me'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not render if neither label nor icon is provided', () => {
        const { container } = render(
            <Button variant={ButtonVariant.PRIMARY} onClick={() => {}} />
        );

        expect(container.querySelector('button')).not.toBeInTheDocument();
    });
});
