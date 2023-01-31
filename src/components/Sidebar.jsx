import React from 'react';
import Backdrop from "components/Backdrop";

const Sidebar = ({className, onClose, isOpen=false, children}) => {
    return (
        <div>
            {isOpen && <Backdrop className="sidebar-backdrop" onClose={onClose} /> }
            <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-close"} ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;