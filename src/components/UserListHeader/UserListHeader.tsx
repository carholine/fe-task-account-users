import React from 'react';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';

const UserListHeader: React.FC<CheckboxProps> = ({ onChange, checked }) => {
    return (
        <div
            className="
            user-list-item
            z-10 top-0 sticky
            text-xs text-c-text-secondary font-medium
            bg-white h-[18px] items-center
            mb-1"
        >
            <div className="min-w-16 gap-3 flex items-center">
                <Checkbox checked={checked} onChange={onChange} />
                <div className="flex-1">User</div>
            </div>
            <div className="flex items-center justify-start">Permission</div>
            <div>{/* Empty title for actions column */}</div>
        </div>
    );
};

export default React.memo(UserListHeader);
