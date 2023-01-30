const Divider = ({text, className}) => {
    return (
        <div className={`flex items-center gap-x-4 ${className}`}>
            <div className="h-px w-full bg-gray-500/30 rounded"></div>
            <div className="text-gray-600 font-medium text-sm">{text}</div>
            <div className="h-px w-full bg-gray-500/30 rounded"></div>
        </div>
    );
};

export default Divider;