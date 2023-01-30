import React from 'react';

const Button = ({className="", variant="", ...attr}) => {
    return (
        <button className={`btn ${variant === "outline" ? "btn-outline": ""} ${className}`}  {...attr} />
    );
};

export default Button;