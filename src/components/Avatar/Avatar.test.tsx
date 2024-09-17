import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar component', () => {
    it('renders the avatar image with correct src and alt text', () => {
        render(
            <Avatar src="https://example.com/avatar.jpg" alt="Test Avatar" />
        );
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute(
            'src',
            'https://example.com/avatar.jpg'
        );
        expect(imgElement).toHaveAttribute('alt', 'Test Avatar');
    });

    it('renders the avatar with default aria-label if no alt is provided', () => {
        render(<Avatar src="https://example.com/avatar.jpg" />);
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('aria-label', 'User avatar');
    });

    it('renders the avatar with custom aria-label', () => {
        render(
            <Avatar
                src="https://example.com/avatar.jpg"
                ariaLabel="Profile picture of John Doe"
            />
        );
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute(
            'aria-label',
            'Profile picture of John Doe'
        );
    });

    it('does not render anything if src is not provided', () => {
        const { container } = render(<Avatar src="" />);
        expect(container).toBeEmptyDOMElement();
    });
});
