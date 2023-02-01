import React from 'react';
import Backdrop from "components/Backdrop";

const Sidebar = ({className, onClose, isOpen=false, children}) => {
    return (
        <>
            {isOpen && <Backdrop className="sidebar-backdrop" onClose={onClose} /> }
            <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-close"} ${className}`}>
                {children}
            </div>
        </>
    );
};

export default Sidebar;