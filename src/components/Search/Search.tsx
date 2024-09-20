import React from 'react';
import SearchIcon from '../../assets/search.svg?react';

interface Props {
    id?: string;
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    ariaLabel?: string;
    className?: string;
}

const Search: React.FC<Props> = ({
    id = 'search-input',
    value,
    placeholder = 'Search',
    onChange,
    ariaLabel = 'Search',
    className = '',
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`relative ${className}`}>
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
                    placeholder:text-sm placeholder:text-c-text-gray-50 placeholder:leading-[21px]
                    outline-transparent"
                onChange={handleInputChange}
                aria-label={ariaLabel}
            />
            <SearchIcon
                className="
                    absolute left-3 transform
                    top-1/2 -translate-y-1/2 
                    text-gray-500 stroke-c-text-gray-50
                    pointer-events-none"
                aria-hidden="true"
                focusable="false"
            />
        </div>
    );
};

export default Search;
