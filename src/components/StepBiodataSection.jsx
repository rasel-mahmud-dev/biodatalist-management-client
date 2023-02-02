import React from 'react';
import {BiCheck} from "react-icons/bi";


const StepBiodataSection = ({steps, onChangeStep, activeStep, completedSteps}) => {

    function handleJumpNextStep(stepIndex){
        if(completedSteps.includes(stepIndex.toString())){
            onChangeStep(stepIndex)

        } else if(completedSteps[completedSteps.length - 1]) {
            // jump next one step, if previous step was completed
            if(Number(completedSteps[0]) + 1 === stepIndex){
                onChangeStep(stepIndex)
            }
        }
    }

    return (
        <div>
            <ul>
                {Object.keys(steps).map((stepLabel, index) => (
                    <li key={index} onClick={() => handleJumpNextStep(index) }
                        className={`biodata-step-li ${activeStep === index ? "active" : ""} ${completedSteps.includes(index.toString()) ? "completed" : ""}`}>
                        <h5 className="w-60 text-end mr-10">{stepLabel}</h5>
                        <div className="biodata-step-number">
                            {completedSteps.includes(index.toString()) ? <BiCheck/> : <h3>{index + 1}</h3>}
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default StepBiodataSection;