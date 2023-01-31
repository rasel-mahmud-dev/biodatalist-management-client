import React from 'react';

const Select = ({label, className="", register, defaultValue, error, ...attr}) => {
    return (
        <div className={`input-group ${error ? 'input-error': ''}`}>
            <label htmlFor="">{label}</label>
            <select className={`input ${className}`}  {...register} defaultValue={defaultValue} {...attr}  />
            {error && <div className="text-red-400 text-sm font-medium">{error}</div>}
        </div>
    );
};

export default Select;