import React from 'react';
import Avatar from "components/Avatar";
import Link from "next/link";
import Button from "components/Button";

const Biodata = ({biodata}) => {
    return (
        <div className="card overflow-hidden !p-0">
            <div className="bg-primary p-4">
                <Avatar className="mx-auto" src={biodata?.user.avatar}
                        username={biodata?.user.username}/>
                <div className="flex justify-center flex-col items-center text-white">
                    <span className="font-medium text-lg mt-2">Biodata ID</span>
                    <span className="text-xs">{biodata._id}</span>
                </div>
            </div>
            <div className="p-4">
                <div className="text-sm text-gray-700">
                    <li className="list-none flex items-center">
                        <p className="w-full border-r border-b py-1 border-t">
                            Birthday
                        </p>
                        <p className="w-full text-center border-b py-1 border-t">{new Date(biodata.birthDay).toDateString()}</p>
                    </li>
                    <li className="list-none flex items-center">
                        <p className="w-full border-r border-b py-1">
                            Height
                        </p>
                        <p className="w-full text-center border-b py-1">{biodata.height} feet</p>
                    </li>
                    <li className="list-none flex items-center">
                        <p className="w-full border-r border-b py-1">
                            Occupation
                        </p>
                        <p className="w-full text-center border-b py-1">{biodata.occupation}</p>
                    </li>
                </div>
                <div className="flex justify-center mt-6">
                    <Link href={`/biodata/${biodata._id}`}><Button className="">Detail</Button></Link>
                </div>

            </div>
        </div>
    );
};

export default Biodata;