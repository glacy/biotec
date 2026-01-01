import React from 'react';

const SlideLayout = ({ children, className = '' }) => {
    return (
        <div className={`w-full min-h-screen lg:min-h-full flex flex-col relative ${className}`}>
            {children}
        </div>
    );
};

export default SlideLayout;
