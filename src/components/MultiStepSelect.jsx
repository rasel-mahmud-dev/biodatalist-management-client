import React, {useState} from 'react';
import {FaAngleLeft, FaAngleRight, FaTimes} from "react-icons/fa";



const MultiStepSelect = ({error, label, name, defaultOption, register}) => {

    const [value, setValue] = useState({
        country: "",
        division: "",
        district: "",
        upazila: "",

    })

    /** OptionsTypes
     * { [key: stepNumber]: Option[] }
     * */
        // this data can fetch from api then you need to use state,
    const [options, setOptions] = useState({})


    let steps = {
        1: {
            formLabel: "Select Country",
        },
        2: {
            formLabel: "Select Division",
        },
        3: {
            formLabel: "Select District",
        },
        4: {
            formLabel: "Select Upazila",
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

    function handleChange(value,) {
        setValue((prevState) => {
        let updateState = {...prevState}
            if (currentStep === 1) {
                updateState["country"] = value
            } else if (currentStep === 2) {
                updateState["division"] = value
            } else if (currentStep === 3) {
                updateState["district"] = value
            } else if (currentStep === 4) {
                updateState["upazila"] = value
            }
            // send update state back where this component used
            register.onChange({target: {name: name, value: updateState}})

            // fetch data for next step
            handleFetchData(currentStep + 1, ()=>{}, updateState)

            // set selected data
            return updateState;
        })

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

    function handleFetchData(currentStep, next, updateState){
        let dataName = currentStep === 1
            ? "countries"
            : currentStep === 2
                ? "divisions"
                : currentStep === 3
                    ? "districts"
                    : "upazilas"


        let updateOptions = {...options}

        // you should cache data here for avoid duplication network request
        fetch(`/bd-${dataName}.json`).then(res=>res.json()).then(data=>{
            if(data){
                let filtred = []
                if(currentStep === 1){
                    filtred = data
                }
                else if(currentStep === 2){
                    /// list of divisions
                    if(updateState.country.name === "Bangladesh"){ // if country name is selected bangladesh then store all divisions
                        filtred = data
                    }

                } else if(currentStep === 3){
                    // list of districts
                    // if  previous step value select correctly
                    if(updateState.division.id) {
                        filtred = data.filter(item => item.division_id === updateState.division.id)
                    }
                } else if(currentStep === 4){
                    // list of upzila
                    // if previous step value select correctly
                    if(updateState.district.id) {
                        filtred = data.filter(item => item.district_id === updateState.district.id)
                    }

                }
            updateOptions[currentStep] = filtred
            setOptions(updateOptions)
            next && next()
            }
        }).catch(ex=>{
            // handle error
        })
    }


    function printSelectedValue(){
        let str = ""
        for (const valueKey in value) {
            if(value[valueKey] && value[valueKey].name){
                str += " => "+ value[valueKey].name
            }
         }

        return !str ? defaultOption.name : str.slice(3)
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
                        <h3 className="font-medium">{steps[currentStep].formLabel}</h3>
                        {currentStep !== 1 ? <FaAngleLeft onClick={handleJumpPreviousStep}/> :
                            <FaTimes className="text-sm" onClick={toggleExpandOption}/>}
                    </div>


                    <div className="mt-5 options-list">
                        {options[currentStep]?.map((item, i) => (
                            <li onClick={() => handleChange(item)} key={i}
                                className="flex items-center justify-between text-sm py-2 list-none hover:bg-primary/10 cursor-pointer px-2 rounded">
                                <span>{item.name}</span>
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