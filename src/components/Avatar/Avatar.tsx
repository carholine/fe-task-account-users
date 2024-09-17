import React from 'react';

interface AvatarProps {
    src: string;
    alt?: string;
    ariaLabel?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = '',
    ariaLabel = 'User avatar',
}) => {
    if (!src) return false;
    return (
        <img
            src={src}
            alt={alt || ariaLabel}
            className="rounded-full h-8 w-8"
            aria-label={ariaLabel}
        />
    );
};

export default Avatar;
