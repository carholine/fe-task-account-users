import React from 'react';
import SearchIcon from '../../assets/search.svg?react';

interface Props {
    id?: string;
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    ariaLabel?: string;
    className?: string;
    disabled?: boolean;
}

const Search: React.FC<Props> = ({
    id = 'search-input',
    value,
    placeholder = 'Search',
    onChange,
    ariaLabel = 'Search',
    className = '',
    disabled = false,
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) onChange(e.target.value);
    };

    return (
        <div className={`relative w-[204px] ${className}`}>
            <label htmlFor={id} className="sr-only">
                {ariaLabel}
            </label>
            <input
                id={id}
                type="search"
                value={value}
                placeholder={placeholder}
                className="
                    h-[40px] w-full p-2 pl-9
                    border rounded
                    placeholder:text-sm placeholder:text-c-gray-100 placeholder:leading-[21px]
                    outline-transparent"
                onChange={handleInputChange}
                aria-label={ariaLabel}
                disabled={disabled}
            />
            <SearchIcon
                className="
                    absolute left-3 transform
                    top-1/2 -translate-y-1/2 
                    stroke-c-gray-100
                    pointer-events-none"
                aria-hidden="true"
                focusable="false"
            />
        </div>
    );
};

export default Search;
