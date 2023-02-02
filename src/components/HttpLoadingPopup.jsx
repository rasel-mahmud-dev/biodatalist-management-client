import React from 'react';
import Popup from "components/Popup";


const HttpLoadingPopup = ({isLoading, onClose, children}) => {
    return (
        <div>
            {/***** network request loading popup *****/}
            <Popup
                className="center-scale-popup w-full max-w-md py-7"
                backdropClass="global-overlay"
                isWithBackdrop={true}
                onClose={onClose}
                isOpen={isLoading}
            >
                {children}
            </Popup>
        </div>
    );
};

export default HttpLoadingPopup;