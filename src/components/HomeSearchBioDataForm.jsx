import React from 'react';
import {useForm} from "react-hook-form";
import Select from "components/Select";
import MultiStepSelect from "components/MultiStepSelect";

const HomeSearchBioDataForm = ({isOpen, className, children, ...attr}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className={`${className}`} {...attr}>
            <div className="shadow-lg rounded-xl bg-white p-0 my-20">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center  w-full">
                    <Select label="Select Gender" register={register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </Select>
                    <Select label="Marriage Status" register={register("marriageStatus")}>
                        <option value="">All</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </Select>
                    <MultiStepSelect label="Marriage Status" >
                        <option value="">All</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </MultiStepSelect>
                </form>
            </div>
        </div>
    );
};

export default HomeSearchBioDataForm;