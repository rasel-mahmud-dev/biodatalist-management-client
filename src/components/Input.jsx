import React from 'react';

const Input = ({label, type="text", className="", register, error, ...attr}) => {

    return (
        <div className={`input-group ${error ? 'input-error': ''}`}>
            <label htmlFor="">{label}</label>
            <input className={`input ${className}`} type={type}  {...register} {...attr} />
            {error && <div className="text-red-400 text-xs font-medium mt-1">{error}</div>}
        </div>
    );
};

export default Input;