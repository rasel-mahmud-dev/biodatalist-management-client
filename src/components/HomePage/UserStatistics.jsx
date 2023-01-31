import React from 'react';

const UserStatistics = () => {

    let data = {
        "Total Groom and Bride's Biodatas": {value: 2312, img: "/icons/couple.svg", className: "!w-32"},
        "Total Groom's Biodatas": {value: 1232, img: "/icons/male.svg"},
        "Total Bride's Biodatas": {value: 1232, img: "/icons/female.svg"},
        "Total Successful Marriages": {value: 102, img: "/icons/married.svg", className: "w-28"},
    }

    return (
        <div className="mt-32">
            <h2 className="section-title text-center">User Statistics</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
                {Object.keys(data).map(key=>(
                    <div key={key} className="card flex flex-col justify-center items-center">
                        <div className={`w-20 h-20 m-auto ${data[key].className}`}>
                            <img className="h-auto" src={data[key].img} alt=""/>
                        </div>
                        <h2 className="text-lg font-medium mt-4 text-center">{key}</h2>
                        <h1 className="text-4xl font-bold mt-4">{data[key].value}</h1>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default UserStatistics;