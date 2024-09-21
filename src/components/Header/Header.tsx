import React from 'react';
import Button from '../Buttons/Button/Button';
import Search from '../Search/Search';

interface HeaderProps {
    onSearchChange: (value: string) => void;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, className }) => {
    return (
        <header className={`flex items-center justify-between ${className}`}>
            <h1 className="text-xl font-medium">Account users</h1>
            <div className="flex items-center gap-3">
                <Search onChange={onSearchChange} ariaLabel="Search users" />
                <Button
                    onClick={() => console.log('connect users')}
                    label="Connect users"
                />
            </div>
        </header>
    );
};

export default Header;
