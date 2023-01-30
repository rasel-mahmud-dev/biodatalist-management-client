import React from 'react';

const Input = ({label, className="", register, error, ...attr}) => {
    return (
        <div className={`flex flex-col mt-3 ${error ? 'input-error': ''}`}>
            <label htmlFor="">{label}</label>
            <input className={`input ${className}`}  {...register} {...attr} />
            {error && <div className="text-red-400 text-sm font-medium">{error}</div>}
        </div>
    );
};

export default Input;