import React from 'react';
import CheckIcon from '../../assets/check.svg?react';

export interface CheckboxProps {
    checked: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event);
    };

    return (
        <div className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="cursor-pointer h-4 w-4 rounded border border-c-gray-50 bg-white checked:bg-c-blue-100 checked:border-c-blue-100 transition duration-150 ease-in-out appearance-none"
                aria-checked={checked}
                aria-label="Checkbox"
                role="checkbox"
            />
            <CheckIcon
                className={`absolute inset-0 flex items-center justify-center pointer-events-none h-4 w-4 fill-white transition duration-150 ease-in-out ${checked ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
            />
        </div>
    );
};

export default Checkbox;
