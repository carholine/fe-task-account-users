import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="spinner flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-c-border border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
