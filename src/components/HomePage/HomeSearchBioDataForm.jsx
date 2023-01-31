import React from 'react';
import {useForm} from "react-hook-form";
import Select from "components/Select";
import MultiStepSelect from "components/MultiStepSelect";
import {BiSearch} from "react-icons/bi";
import Button from "components/Button";

const HomeSearchBioDataForm = ({isOpen, className, children, ...attr}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className={`${className}`} {...attr}>
            <div className="shadow-lg rounded-xl bg-white p-5 my-20 ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center  w-full gap-x-10 pb-5">
                    <Select label="I'm looking for" register={register("gender")} >
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </Select>
                    <Select label="Marital Status" register={register("marriageStatus")}>
                        <option value="">All</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </Select>

                    <MultiStepSelect label="Marriage Status" >
                        <option value="">All</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </MultiStepSelect>

                    <Button className="flex items-center gap-x-1 mt-8 ">
                        <BiSearch />
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default HomeSearchBioDataForm;