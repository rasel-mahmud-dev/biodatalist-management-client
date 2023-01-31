import React, {useEffect, useState} from 'react';
import DashboardLayout from "../../Layout/Dashboard";
import Input from "components/Input";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import Select from "components/Select";
import Button from "components/Button";
import biodataOptions from "../../data/biodataOptions";
import {updateBiodataAction} from "../../store/actions/biodataAction";
import StepBiodataSection from "components/StepBiodataSection";
import {addressInput, generalInfoInput} from "components/Dashboard/EditBioDataStepFields";



const EditBiodata = () => {

    const [activeStep, setActiveStep] = useState(1)

    const authState = useSelector(state => state.authState)

    const {
        register,
        handleSubmit,
        formState: {errors}, reset
    } = useForm();




    // store bio state step number as key and fields as object
    // like this {0: {biodataType: "value", ...}}
    const [stepBioData, setStepBiodata] = useState({})


    // grouping bio data for multi step
    const steps = {
        "General Info": ["biodataType", "maritalStatus", "birthDay", "height", "bloodGroup", "nationality"],
        "Address": [],
        "Educational Qualifications": [],
        "Family Information": [],
        "Personal Information": [],
        "Occupational information": [],
        "Marriage related information": [],
        "Expected Life Partner": [],
        "Pledge": [],
        "Contact": [],
    }

    useEffect(() => {
        if (authState.biodata) {

            let updateBiodataDefault = {}

            Object.keys(steps).forEach((key, index) => {
                let stepNames = steps[key]
                updateBiodataDefault[index] = {}
                stepNames.forEach(name => {
                    updateBiodataDefault[index] = {
                        ...updateBiodataDefault[index],
                        [name]: authState.biodata[name]
                    }
                })
            })

            let trimEmptyObject = {}
            for (const updateBiodataDefaultKey in updateBiodataDefault) {
                if (Object.keys(updateBiodataDefault[updateBiodataDefaultKey]).length > 0) {
                    trimEmptyObject[updateBiodataDefaultKey] = updateBiodataDefault[updateBiodataDefaultKey]
                }
            }

            // grouping form data
            setStepBiodata(trimEmptyObject)

            // update form default for async operation
            reset(authState.biodata)
        }
    }, [authState.biodata])


    const dispatch = useDispatch()


    function onSubmit(data) {
        // setStepBiodata(prevState => ({
        //     ...prevState,
        //     [activeStep]: data
        // }))

        console.log(data)
        // dispatch(updateBiodataAction(data)).unwrap().then((doc) => {
        //     setActiveStep(prevState => prevState + 1)
        // })
    }

    function handleChangeStep(stepIndex){
        setActiveStep(stepIndex)
    }

    const stepRenderForm = {
        0: generalInfoInput,
        1: addressInput,
    }


    return (
        <DashboardLayout containerClass="container-full">
            <h1>Dashboard Home</h1>

            <div className="max-w-3xl mx-auto ">

                <div className="flex justify-center gap-x-10">

                    <StepBiodataSection onChangeStep={handleChangeStep} activeStep={activeStep} steps={steps} completedSteps={Object.keys(stepBioData)} />

                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mt-6">
                                {stepRenderForm[activeStep] && stepRenderForm[activeStep](errors, stepBioData, register)}
                            </div>


                            <div className="flex justify-between mt-10">
                                <Button>Back</Button>
                                <Button type="submit">Save and Next</Button>
                            </div>
                        </form>

                    </div>
                </div>


            </div>

        </DashboardLayout>
    );
};

export default EditBiodata;