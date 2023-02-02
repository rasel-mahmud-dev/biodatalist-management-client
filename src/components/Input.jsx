import React, {useEffect, useRef} from 'react';

const Input = ({label, type = "text", className = "", register, error, ...attr}) => {

    let dateRef = useRef()

    useEffect(() => {

        if (type === "date" && attr.defaultValue && dateRef.current) {
            // bad way for react-hooks-form
            let date = dateRef.current.querySelector("input[type=date]")
            if(date){
                date.value = attr.defaultValue
            }
        }
    }, [type, dateRef, attr.defaultValue])

    return (
        <div className={`input-group ${error ? 'input-error' : ''}`} ref={type === "date" ? dateRef : ""}>
            <label htmlFor="">{label}</label>
            <input
                className={`input ${className}`}
                type={type}
                {...register}
                {...attr}
            />
            {error && <div className="text-red-400 text-xs font-medium mt-1">{error}</div>}
        </div>
    );
};

export default Input;