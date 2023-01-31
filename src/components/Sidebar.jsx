import React from 'react';

const Sidebar = ({className, children}) => {
    return (
        <div className={`sidebar ${className}`}>
            {children}
        </div>
    );
};

export default Sidebar;