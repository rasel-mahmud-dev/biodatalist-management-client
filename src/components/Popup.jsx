import React from 'react';

const Popup = ({isOpen, className, children, ...attr}) => {
    return (
        <div className={`popup absolute rounded-md p-4 bg-white ${!isOpen ? "popup--close" : "popup--open"} ${className}`} {...attr}>
            {children}
        </div>
    );
};

export default Popup;