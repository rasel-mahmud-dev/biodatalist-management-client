import React from 'react';

const ErrorMessage = ({message, ...attr}) => {
    return (
        <div {...attr}>
            {message && <div className="bg-red-500/10 text-red-400 font-medium text-sm p-2 my-6 rounded-md">{message}</div>}
        </div>
    );
};

export default ErrorMessage;