import React, { useState } from 'react';
import CheckIcon from '../../assets/check.svg?react';

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<Props> = ({ checked = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        setIsChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className="h-4 w-4 rounded border border-c-gray-300 checked:bg-c-blue-100 checked:border-c-blue-100 transition duration-150 ease-in-out appearance-none"
                aria-checked={isChecked}
            />
            <CheckIcon
                className={`h-4 w-4 absolute inset-0 fill-white transition duration-150 ease-in-out ${isChecked ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
            />
        </label>
    );
};

export default Checkbox;
