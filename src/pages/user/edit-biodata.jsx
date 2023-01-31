import React, {useEffect, useState} from 'react';
import DashboardLayout from "../../Layout/Dashboard";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import Button from "components/Button";
import StepBiodataSection from "components/StepBiodataSection";
import {
    addressInput,
    contactInput,
    educationInput,
    familyInformationInput,
    generalInfoInput,
    maritalRelatedInfo,
    occupationalInput
} from "components/Dashboard/EditBioDataStepFields";


import {updateBiodataAction} from "../../store/actions/biodataAction";


const EditBiodata = () => {

    const [activeStep, setActiveStep] = useState(0)

    const authState = useSelector(state => state.authState)
    const dispatch = useDispatch()

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
        "General Info": ["biodataType", "birthDay", "height", "bloodGroup", "nationality"],
        "Address": ["permanentAddress", "presentAddress"],
        "Educational Qualifications": ["educationMethod"],
        "Family Information": ["fatherName", "isFatherAlive"],
        "Occupational information": ["occupation"],
        "Marriage related information": ["maritalStatus"],
        "Contact": ["phone"],
    }

    // populate bio data group
    useEffect(() => {
        if (authState.biodata) {
            makeBioDataToStepGroup()
        }
    }, [authState.biodata])


    function makeBioDataToStepGroup() {
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


    function onSubmit(data) {
        setStepBiodata(prevState => ({
            ...prevState,
            [activeStep]: data
        }))

        dispatch(updateBiodataAction(data)).unwrap().then((doc) => {
            setActiveStep(prevState => prevState + 1)
        })
    }

    function handleChangeStep(stepIndex) {
        setActiveStep(stepIndex)
    }

    const stepRenderForm = {
        0: generalInfoInput,
        1: addressInput,
        2: educationInput,
        3: maritalRelatedInfo,
        4: familyInformationInput,
        5: occupationalInput,
        6: contactInput
    }

    // check bio group data completed or not
    function completedSteps() {
        let completedStepNumberArr = []
        for (let stepNumberKey in stepBioData) {
            let eachBioItem = stepBioData[stepNumberKey]
            for (let eachBioItemKey in eachBioItem) {
                if (eachBioItem[eachBioItemKey]) {
                    if (!completedStepNumberArr.includes(stepNumberKey)) {
                        completedStepNumberArr.push(stepNumberKey)
                    }
                }
            }
        }
        return completedStepNumberArr;
    }

    return (
        <DashboardLayout containerClass="container-full">
            <h1 className="route-title">Edit Bio Data</h1>

            <div className="max-w-3xl mx-auto ">

                <div className="flex justify-center gap-x-10">

                    <StepBiodataSection
                        onChangeStep={handleChangeStep}
                        activeStep={activeStep}
                        steps={steps}
                        completedSteps={completedSteps()}
                    />

                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="">
                                {stepRenderForm[activeStep] && stepRenderForm[activeStep](errors, stepBioData, register)}
                            </div>


                            <div className="flex justify-between mt-14">
                                <Button>Back</Button>
                                <Button type="submit">{activeStep !== 6 ? "Save and Next" : "Complete"}</Button>
                            </div>
                        </form>

                    </div>
                </div>


            </div>

        </DashboardLayout>
    );
};

export default EditBiodata;