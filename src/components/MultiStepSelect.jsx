import React, {useEffect, useState} from 'react';
import {FaAngleLeft, FaAngleRight, FaTimes} from "react-icons/fa";

const MultiStepSelect = ({error, label,  name, defaultValue, defaultOption, register}) => {

    const [value, setValue] = useState({
        country: "",
        division: "",
        district: "",
        upazila: "",
    })

    useEffect(()=>{
        if(!defaultValue) return;

        let updateValues = {...value}
        for (let valueKey in value) {
            if(defaultValue[valueKey]){
                updateValues[valueKey] = defaultValue[valueKey]
            }
        }

        setValue(updateValues)

    }, [defaultValue])



    /** OptionsTypes
     * { [key: stepNumber]: Option[] }
     * */
        // this data can fetch from api then you need to use state,
    const [options, setOptions] = useState({})


    let steps = {
        1: {
            formLabel: "Select Country",
            firstOption: "",
            address: "country"
        },
        2: {
            formLabel: "Select Division",
            firstOption: "All Division",
            address: "division"
        },
        3: {
            formLabel: "Select District",
            firstOption: "All District",
            address: "district"
        },
        4: {
            formLabel: "Select Upazila",
            firstOption: "All Upzila",
            address: "upazila"
        }
    }

    const [currentStep, setCurrentStep] = useState(1)
    const [expandOption, setExpandOption] = useState(false)


    function toggleExpandOption() {

        handleFetchData(1, null, value)
        setCurrentStep(1)
        setExpandOption(!expandOption)
    }

    function handleJumpPreviousStep() {
        let prev = currentStep - 1
        setValue((prevState) => ({
            ...prevState,
            [currentStep]: ""
        }))
        setCurrentStep(prev)
    }

    function getValue(updateState){
        let result = {}


        if (updateState.country && updateState.country.name) {
            result["country"] = updateState.country.name
        }
        if (updateState.division && updateState.division.name) {
            result["division"] = updateState.division.name
        }
        if (updateState.division && updateState.division.name) {
            result["division"] = updateState.division.name
        }
        if (updateState.district && updateState.district.name) {
            result["district"] = updateState.district.name
        }
        if (updateState.upazila && updateState.upazila.name) {
            result["upazila"] = updateState.upazila.name
        }
        return result
    }

    function handleChange(value) {
        setValue((prevState) => {
            let updateState = {...prevState}

            // if select all types like all division, all upzila
            if(!value){
                updateState[steps[currentStep].address] = {name: "All " + steps[currentStep].address}
                setExpandOption(false)

            } else{
                updateState[steps[currentStep].address] = value
                // fetch data for next step
                handleFetchData(currentStep + 1, () => {
                }, updateState)

                // progress next step
                setCurrentStep((oldStep) => {
                    if (currentStep >= 4) {
                        setExpandOption(false)
                        return 1
                    } else {
                        return oldStep + 1
                    }
                })
            }

            // if select all division
            if(updateState.division && updateState.division.name === "All division"){
                updateState.district = undefined
                updateState.upazila = undefined
            }

            if(updateState.district && updateState.district.name === "All district"){
                updateState.upazila = undefined
            }

            // send update state back where this component used
            register.onChange({target: {name: name, value: getValue(updateState)}})

            // set selected data
            return updateState;
        })
    }

    function handleFetchData(currentStep, next, updateState) {
        let dataName = currentStep === 1
            ? "countries"
            : currentStep === 2
                ? "divisions"
                : currentStep === 3
                    ? "districts"
                    : "upazilas"


        let updateOptions = {...options}

        // you should cache data here for avoid duplication network request
        fetch(`/bd-${dataName}.json`).then(res => res.json()).then(data => {
            if (data) {
                let filtred = []
                if (currentStep === 1) {
                    filtred = data
                } else if (currentStep === 2) {
                    /// list of divisions
                    if (updateState.country.name === "Bangladesh") { // if country name is selected bangladesh then store all divisions
                        filtred = data
                    }

                } else if (currentStep === 3) {
                    // list of districts
                    // if  previous step value select correctly
                    if (updateState.division.id) {
                        filtred = data.filter(item => item.division_id === updateState.division.id)
                    }
                } else if (currentStep === 4) {
                    // list of upzila
                    // if previous step value select correctly
                    if (updateState.district.id) {
                        filtred = data.filter(item => item.district_id === updateState.district.id)
                    }

                }
                updateOptions[currentStep] = filtred
                setOptions(updateOptions)
                next && next()
            }
        }).catch(ex => {
            // handle error
        })
    }


    // print all address as input
    function printSelectedValue() {
        let str = ""
        for (const valueKey in value) {
            // if we have default value
            if(defaultValue){

                // if we have default value and also change currently by user
                if(value[valueKey] && value[valueKey].name){
                    if (value[valueKey] && value[valueKey].name) {
                        str += " => " + value[valueKey].name
                    }

                } else {
                    // string all addresses concatenate
                    if (value[valueKey]) {
                        str += " => " + value[valueKey]
                    }
                }
            } else{
                // string all addresses concatenate
                if (value[valueKey] && value[valueKey].name) {
                    str += " => " + value[valueKey].name
                }
            }
        }

        // is input are chosent than show new addresses or print default option name as placeholder
        return !str ? defaultOption?.name : str.slice(3)
    }

    return (
        <div className={`input-group ${error ? 'input-error' : ''}`}>
            <label htmlFor="">{label}</label>

            <div className="custom-input" onClick={toggleExpandOption}>
                <span className="text-sm">{printSelectedValue()}</span>
            </div>

            {expandOption && steps[currentStep] && (
                <div className="custom-options p-4">
                    <div
                        className={`flex items-center justify-between border-b py-2 border-primary/30 ${currentStep !== 1 ? "flex-row-reverse" : ""}`}>
                        <h3 className="font-medium whitespace-nowrap">{steps[currentStep].formLabel}</h3>
                        {currentStep !== 1 ? <FaAngleLeft onClick={handleJumpPreviousStep}/> :
                            <FaTimes className="text-sm" onClick={toggleExpandOption}/>}
                    </div>

                    <div className="mt-5 options-list">

                        {/******** all first addresses ********/}
                        {steps[currentStep] && steps[currentStep].firstOption && (
                            <li onClick={() => handleChange()}
                                className="flex items-center justify-between text-sm py-2 list-none hover:bg-primary/10 cursor-pointer px-2 rounded">
                                <span>{steps[currentStep].firstOption}</span>
                            </li>
                        )}

                        {options[currentStep]?.map((item, i) => (
                            <li onClick={() => handleChange(item)} key={i}
                                className="flex items-center justify-between text-sm py-2 list-none hover:bg-primary/10 cursor-pointer px-2 rounded">
                                <span className="">{item.name}</span>
                                <FaAngleRight className="text-gray-500"/>
                            </li>
                        ))}
                    </div>
                </div>
            )}


            {error && <div className="text-red-400 text-xs font-medium mt-1">{error}</div>}
        </div>
    );
};

export default MultiStepSelect;