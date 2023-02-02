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
import Popup from "components/Popup";
import {useRouter} from "next/router";
import Loader from "components/Loader";
import HttpLoadingPopup from "components/HttpLoadingPopup";


const EditBiodata = () => {

    const [activeStep, setActiveStep] = useState(0)

    const router = useRouter()

    const authState = useSelector(state => state.authState)
    const dispatch = useDispatch()

    const [openCompletePopup, setOpenCompletePopup] = useState(false)
    const [saveDataLoading, setSaveDataLoading] = useState(false)



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


    // save every step data in database
    function onSubmit(data) {
        setSaveDataLoading(true)
        setStepBiodata(prevState => ({
            ...prevState,
            [activeStep]: data
        }))

        // if is the last step then set isCompleted to detect biodata completed or not
        if(activeStep === 6){
            data.isCompleted = true
        }

        // dispatch action
        dispatch(updateBiodataAction(data)).unwrap().then((doc) => {
            setActiveStep(prevState => {
                let nextStep = prevState + 1
                if(nextStep === 7){
                    // if last step completed then open popup modal
                    setOpenCompletePopup(true)
                }else {
                    setOpenCompletePopup(false)
                    return nextStep
                }
            })
        }).finally(()=> setSaveDataLoading(false))
    }

    function handleChangeStep(stepIndex) {
        setActiveStep(stepIndex)
    }

    // step render form sequentially
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

    function handleJumpMyBiodata(){
        setOpenCompletePopup(false)
        setActiveStep(0)
        router.push("/user/mybio")
    }

    function renderPopupCompletedModal(){
        return (
            <Popup
                className="center-scale-popup w-full max-w-md py-7"
                backdropClass="global-overlay"
                isWithBackdrop={true}
                onClose={()=>{setOpenCompletePopup(false); setActiveStep(0)}}
                isOpen={openCompletePopup}
            >
                <h1 className="route-title text-center">Wellcome!</h1>
                <p className="text-center text-sm font-medium">Your biodata has been completed</p>

                <Button className="mx-auto block mt-6" onClick={handleJumpMyBiodata}>See My Biodata</Button>
            </Popup>
        )
    }


    return (
        <DashboardLayout roles={["ADMIN", "CUSTOMER"]}>
            <h1 className="route-title">Edit Bio Data</h1>


            {/***** save step data loading popup *****/}
            <HttpLoadingPopup onClose={()=>setSaveDataLoading(false)} isLoading={saveDataLoading}>
                <Loader className="loader-center !relative" titleClass="font-medium text-sm" title="Data is saving...!"  />
            </HttpLoadingPopup>


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
                                <Button onClick={()=>handleChangeStep(activeStep - 1)} disabled={activeStep === 0 }>Back</Button>
                                <Button type="submit">{activeStep !== 6 ? "Save and Next" : "Complete"}</Button>
                            </div>
                        </form>

                    </div>
                </div>

                {renderPopupCompletedModal()}

            </div>

        </DashboardLayout>
    );
};

export default EditBiodata;