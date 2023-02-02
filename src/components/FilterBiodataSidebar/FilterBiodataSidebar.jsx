import React, {useState} from 'react';
import Sidebar from "components/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../../store/slices/appSlice";
import Button from "components/Button";
import {useForm} from "react-hook-form";
import Input from "components/Input";
import {changeFilter, clearFilter} from "../../store/slices/biodataSlice";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import Select from "components/Select";
import biodataOptions from "../../data/biodataOptions";
import Accordion from "components/Accordion";
import {addressInput} from "components/Dashboard/EditBioDataStepFields";

import ReactSlider from 'react-slider'


const FilterBiodataSidebar = () => {

    const {
        appState: {isOpenSidebar},
        biodataState: {filter}
    } = useSelector(state => state)

    const filterType = ["Filters", "Biodata No"]
    const [activeTab, setActiveTab] = useState(0)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const [openAccordionIds, setOpenAccordionIds] = useState([1])

    const [ageRange, setAgeRange] = useState([0, 90])


    const onSubmit = (data) => {

        if(activeTab === 1 && data.biodataNo){
            // only filter by biodata No.
            dispatch(changeFilter({
                biodataNo: data.biodataNo
            }))
        } else{
            // only filter all input without biodata No
            dispatch(changeFilter({
                ...data,
                ageRange,
                biodataNo: ""
            }))
        }
    }

    function handleClearFilterValue() {
        reset()
        dispatch(clearFilter())
        setAgeRange([0, 90])
    }


    function handleChangeAgeSlider(value) {
        setAgeRange(value)
    }


    function handleToggle(dataId) {
        if (openAccordionIds.includes(dataId)) {
            setOpenAccordionIds(openAccordionIds.filter(item => item !== dataId))
        } else {
            setOpenAccordionIds([...openAccordionIds, dataId])
        }
    }

    function isOpenExpandAccordion(id) {
        return openAccordionIds.includes(id)
    }


    function renderFilterForm() {
        return (
            <div>
                <div>
                    <Accordion openIds={openAccordionIds}>
                        <Accordion.Item dataId={1} className="cursor-pointer">
                            <div onClick={() => handleToggle(1)}
                                 className="flex items-center justify-between border-b border-primary pb-2">
                                <h4 className="font-medium text-sm">Primary</h4>
                                {isOpenExpandAccordion(1) ? <FaAngleUp/> : <FaAngleDown/>}
                            </div>

                            {/***** accordion content *******/}
                            <div>
                                <Select
                                    label="Biodata Type"
                                    defaultValue={filter.biodataType}
                                    error={errors["biodataType"]?.message}
                                    option={biodataOptions.biodataType}
                                    register={register("biodataType")}
                                >
                                    <option value="">Select</option>
                                    {biodataOptions.biodataType.map(opt => (
                                        <option value={opt.value}>{opt.label}</option>
                                    ))}
                                </Select>
                                <Select
                                    defaultValue={filter.maritalStatus}
                                    label="Marriage Status"
                                    error={errors["maritalStatus"]?.message}
                                    option={biodataOptions.maritalStatus}
                                    register={register("maritalStatus")}
                                >
                                    <option value="">Select</option>
                                    {biodataOptions.maritalStatus.map(opt => (
                                        <option value={opt.value}>{opt.label}</option>
                                    ))}
                                </Select>

                                <div className="mt-10 input-group">
                                    <label className="">Age</label>
                                    <ReactSlider
                                        value={ageRange}
                                        onChange={handleChangeAgeSlider}
                                        className="horizontal-slider mt-2"
                                        thumbClassName="slider-thumb"
                                        trackClassName="slider-track"
                                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}

                                    />
                                </div>

                            </div>
                        </Accordion.Item>

                        <Accordion.Item dataId={2} className="cursor-pointer">
                            <div onClick={() => handleToggle(2)}
                                 className="flex items-center justify-between border-b border-primary pb-2 mt-10">
                                <h4 className="font-medium text-sm">Address</h4>
                                {isOpenExpandAccordion(2) ? <FaAngleUp/> : <FaAngleDown/>}
                            </div>

                            {/***** accordion content *******/}
                            <div>
                                {/***** putting default values that store inside redux store ******/}
                                {addressInput(errors, {
                                    1: {
                                        presentAddress: filter.presentAddress,
                                        permanentAddress: filter.permanentAddress
                                    }
                                }, register, false, false)}
                            </div>

                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        )
    }


    return (

        <Sidebar onClose={() => dispatch(toggleSidebar())} isOpen={isOpenSidebar}>

            <div className="p-4">
                <div className="tab-root">
                    {filterType.map((item, i) => (
                        <div key={i} onClick={() => setActiveTab(i)}
                             className={`tab ${activeTab === i ? "tab-active" : ""}`}>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10">

                    {activeTab === 0 ? renderFilterForm() : (
                        <div>
                            <Input
                                label="Biodata No"
                                defaultValue={filter.biodataNo}
                                register={register("biodataNo")}
                            />

                        </div>
                    )}

                    <div className="my-20">
                        <Button className="mx-auto block">Search</Button>

                        {/**** clear all filter ****/}
                        {Object.keys(filter).length > 0 && <Button onClick={handleClearFilterValue} className="mt-4 block m-auto">Clear Filter</Button> }
                    </div>

                </form>
            </div>
        </Sidebar>
    );
};

export default FilterBiodataSidebar;