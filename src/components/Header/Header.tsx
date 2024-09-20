import React from 'react';
import Button from '../Buttons/Button/Button';
import Search from '../Search/Search';

interface HeaderProps {
    onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
    return (
        <header className="flex items-center justify-between">
            <h1 className="text-xl font-medium">Account users</h1>
            <div className="flex items-center gap-3">
                <Search
                    onChange={onSearchChange}
                    ariaLabel="Search users"
                    className="w-[204px]"
                />
                <Button
                    onClick={() => console.log('connect users')}
                    label="Connect users"
                />
            </div>
        </header>
    );
};

export default Header;
