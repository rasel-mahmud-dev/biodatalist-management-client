import React from 'react';

const Services = () => {
    let data = [
        {
            name: "Create Biodata",
            desc: "You can easily create a biodata on OrdhekDeen completely free of cost within some steps.",
            img: "/icons/hiw-create-biodata.svg",

        },
        {
            name: "Search Biodata",
            desc: "You can easily search biodata using many filters including age, upazila, profession, educational qualification.",
            img: "/icons/hiw-search.svg",

        },
        {
            name: "Contact with gurdians",
            desc: "If someone likes your biodata or you like someone's biodata you can directly contact their parent.",
            img: "/icons/hiw-contact.svg",

        },
        {
            name: "Get married",
            desc: "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah.",
            img: "/icons/hiw-success.svg",

        },
    ]

    return (
        <div className="mt-32">
            <h2 className="section-title text-center">Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
                {data.map((item, index)=>(
                    <div key={index} className="card flex flex-col justify-center items-center text-center">
                        <div className={`w-20 h-20 flex justify-center ${item.className ? item.className : ""}`}>
                            <img className="" src={item.img} alt=""/>
                        </div>
                        <h2 className="text-lg font-bold mt-4">{item.name}</h2>
                        <p className="text-para mt-4">{item.desc}</p>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default Services;