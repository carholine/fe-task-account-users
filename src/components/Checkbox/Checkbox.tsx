import React from 'react';
import CheckIcon from '../../assets/check.svg?react';

export interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    disabled = false,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(event);
        }
    };

    return (
        <div
            className={`relative inline-flex items-center ${
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className={`
                h-4 w-4
                rounded border border-c-gray-50
                bg-white
                checked:bg-c-blue-100 checked:border-c-blue-100
                transition duration-150 ease-in-out
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                appearance-none`}
                aria-checked={checked}
                aria-label="Checkbox"
                role="checkbox"
                disabled={disabled}
                aria-disabled={disabled}
            />
            <CheckIcon
                className={`h-4 w-4 absolute inset-0 flex items-center justify-center
                    fill-white
                    ${checked ? 'opacity-100' : 'opacity-0'}
                    transition duration-150 ease-in-out
                    pointer-events-none`}
                aria-hidden="true"
            />
        </div>
    );
};

export default Checkbox;
