import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Select from "components/Select";
import MultiStepSelect from "components/MultiStepSelect";
import {BiSearch} from "react-icons/bi";
import Button from "components/Button";
import biodataOptions from "../../data/biodataOptions";
import {changeFilter} from "../../store/slices/biodataSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

const HomeSearchBioDataForm = ({isOpen, className, children, ...attr}) => {

    const router = useRouter()

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        let filter = {...data}
        if(!data.permanentAddress){
            filter.permanentAddress = undefined
        } else if(!data.presentAddress){
            filter.presentAddress = undefined
        }

        dispatch(changeFilter({
            ...filter
        }))

        router.push("/biodata")
    }


    return (
        <div className={`${className}`} {...attr}>
            <div className="shadow-lg rounded-xl bg-white p-5 my-20 ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center  w-full gap-x-10 pb-5">
                    <Select
                        label="Biodata Type"
                        option={biodataOptions.biodataType}
                        register={register("biodataType")}
                    >
                        <option value="">Select</option>
                        {biodataOptions.biodataType.map(opt => (
                            <option value={opt.value}>{opt.label}</option>
                        ))}
                    </Select>
                    <Select
                        label="Marriage Status"
                        option={biodataOptions.maritalStatus}
                        register={register("maritalStatus")}
                    >
                        <option value="">Select</option>
                        {biodataOptions.maritalStatus.map(opt => (
                            <option value={opt.value}>{opt.label}</option>
                        ))}
                    </Select>

                    <MultiStepSelect
                        defaultOption={{name: "Select Present Address", value: ""}}
                        label="Permanent Address"
                        register={register("permanentAddress")}
                    />

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