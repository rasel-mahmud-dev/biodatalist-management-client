import React from 'react';

const Select = ({label, className="", register, error, ...attr}) => {
    return (
        <div className={`flex w-full flex-col mt-3 ${error ? 'input-error': ''}`}>
            <label htmlFor="">{label}</label>
            <select className={`input ${className}`}  {...register} {...attr} />
            {error && <div className="text-red-400 text-sm font-medium">{error}</div>}
        </div>
    );
};

export default Select;