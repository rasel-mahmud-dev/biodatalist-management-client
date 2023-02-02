import React from "react";
import biodataOptions from "../../data/biodataOptions";
import Select from "components/Select";
import Input from "components/Input";
import MultiStepSelect from "components/MultiStepSelect";


// render for general bio data
export function generalInfoInput(errors, stepBioData, register) {
    const STEP_NO = 0
    const fields = [
        {
            label: "Biodata Type",
            options: biodataOptions.biodataType,
            name: "biodataType",
            registerOptions: {
                required: "Biodata Type is required"
            }
        },
        {
            label: "Birth Year",
            type: "date",
            name: "birthDay",
            registerOptions: {
                required: "Birth Year required"
            }
        },
        {
            label: "Height",
            options: biodataOptions.height,
            name: "height",
            registerOptions: {
                required: "height is required"
            }
        },
        {
            label: "Blood Group",
            options: biodataOptions.bloodGroup,
            name: "bloodGroup",
            registerOptions: {
                required: "bloodGroup is required"
            }
        },
        {
            label: "Nationality",
            options: biodataOptions.nationality,
            name: "nationality",
            registerOptions: {
                required: "Nationality is required"
            }
        },
    ]
    return (
        <div>
            <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">General Info</h2>

            {
                fields.map(field => (
                    field.options ? (
                        <Select key={field.name} error={errors[field.name]?.message} label={field.label}
                                defaultValue={stepBioData[STEP_NO]?.[field.name]}
                                register={register(field.name, field.registerOptions)}>
                            <option value="">Select</option>
                            {field.options.map(opt => (
                                <option value={opt.value}>{opt.label}</option>
                            ))}
                        </Select>
                    ) : (
                        <Input
                            key={field.name}
                            defaultValue={stepBioData[STEP_NO]?.[field.name]}
                            error={errors[field.name]?.message}
                            type={field.type}
                            label={field.label}
                            register={register(field.name, field.registerOptions)}
                        />
                    )
                ))
            }
        </div>
    )
}


// render for Address bio data
export function addressInput(errors, stepBioData, register, isShowLabel= false, isDisableValidation = false) {


    const STEP_NO = 1

    const fields = [
        {
            label: "Permanent Address",
            options: biodataOptions.biodataType,
            name: "permanentAddress",
            registerOptions: isDisableValidation && {
                required: "Permanent Address is required"
            }
        },
        {
            label: "Present Address",
            options: biodataOptions.biodataType,
            name: "presentAddress",
            registerOptions: isDisableValidation && {
                required: "Present Address is required"
            }
        }
    ]


    return (
        <div>
            {isShowLabel && <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">Address</h2> }
            {
                fields.map(field => (
                    <MultiStepSelect
                        key={field.name}
                        defaultOption={{name: "Select Present Address", value: ""}}
                        defaultValue={stepBioData[STEP_NO]?.[field.name]}
                        name={field.name}
                        error={errors[field.name]?.message}
                        label={field.label}
                        register={register(field.name, field.registerOptions)}
                    />
                ))
            }
        </div>
    )
}


// render for educationInput bio data
export function educationInput(errors, stepBioData, register) {
    const STEP_NO = 2
    const fields = [
        {
            label: "Your Education Method",
            options: biodataOptions.educationMethod,
            name: "educationMethod",
            registerOptions: {
                required: "educationMethod is required"
            }
        }
    ]


    return (
        <div>
            <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">Educational Qualifications</h2>
            {
                fields.map(field => (
                    field.options ? (
                        <Select key={field.name}
                                error={errors[field.name]?.message} label={field.label}
                                defaultValue={stepBioData[STEP_NO]?.[field.name]}
                                register={register(field.name, field.registerOptions)}>
                            <option value="">Select</option>
                            {field.options.map(opt => (
                                <option value={opt.value}>{opt.label}</option>
                            ))}
                        </Select>
                    ) : (
                        <Input
                            key={field.name}
                            defaultValue={stepBioData[STEP_NO]?.[field.name]}
                            error={errors[field.name]?.message}
                            type={field.type}
                            label={field.label}
                            register={register(field.name, field.registerOptions)}
                        />
                    )
                ))
            }
        </div>
    )
}


// render for familyInformationInput bio data
export function familyInformationInput(errors, stepBioData, register) {
    const STEP_NO = 3
    const fields = [
        {
            label: "Father's Name",
            name: "fatherName",
            registerOptions: {
                required: "Father's Name is required"
            }
        },
        {
            label: "Is your father alive",
            name: "isFatherAlive",
            options: biodataOptions.fatherAliveOptions,
            registerOptions: {
                required: "Father Status is required"
            }
        }
    ]


    return (
        <div>
            <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">Family Information</h2>
            {
                fields.map(field => (
                    field.options ? (
                        <Select key={field.name} error={errors[field.name]?.message} label={field.label}
                                defaultValue={stepBioData[STEP_NO]?.[field.name]}
                                register={register(field.name, field.registerOptions)}>
                            <option value="">Select</option>
                            {field.options.map(opt => (
                                <option value={opt.value}>{opt.label}</option>
                            ))}
                        </Select>
                    ) : (
                        <Input
                            key={field.name}
                            defaultValue={stepBioData[0]?.[field.name]}
                            error={errors[field.name]?.message}
                            type={field.type}
                            label={field.label}
                            register={register(field.name, field.registerOptions)}
                        />
                    )
                ))
            }
        </div>
    )
}


// render for Occupational bio data
export function occupationalInput(errors, stepBioData, register) {
    const STEP_NO = 4
    const fields = [
        {
            label: "Occupation",
            options: biodataOptions.occupations,
            name: "occupation",
            registerOptions: {
                required: "Occupation is required"
            }
        }
    ]


    return (
        <div>
            <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">Occupational information</h2>
            {
                fields.map(field => (

                    <Select key={field.name} error={errors[field.name]?.message} label={field.label}
                            defaultValue={stepBioData[STEP_NO]?.[field.name]}
                            register={register(field.name, field.registerOptions)}>
                        <option value="">Select</option>
                        {field.options.map(opt => (
                            <option value={opt.value}>{opt.label}</option>
                        ))}
                    </Select>

                ))
            }
        </div>
    )
}


// render for maritalRelatedInfo bio data
export function maritalRelatedInfo(errors, stepBioData, register) {
    const STEP_NO = 5
    const fields = [
        {
            label: "Marital Status",
            name: "maritalStatus",
            options: biodataOptions.maritalStatus,
            registerOptions: {
                required: "Marital Status is required"
            }
        }
    ]

    return (
        <div>
            <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">Marriage related information</h2>
            {
                fields.map(field => (
                    <Select key={field.name} error={errors[field.name]?.message} label={field.label}
                            defaultValue={stepBioData[STEP_NO]?.[field.name]}
                            register={register(field.name, field.registerOptions)}>
                        <option value="">Select</option>
                        {field.options.map(opt => (
                            <option value={opt.value}>{opt.label}</option>
                        ))}
                    </Select>
                ))
            }
        </div>
    )
}


// render for contactInput bio data
export function contactInput(errors, stepBioData, register) {
    const STEP_NO = 6
    const fields = [
        {
            label: "phone",
            name: "phone",
            registerOptions: {
                required: "phone is required"
            }
        }
    ]

    return (
        <div>
            <h2 className="font-semibold text-xl pb-1 mb-4 border-b border-primary/40">Contact information</h2>
            {
                fields.map(field => (
                    <Input key={field.name}
                           defaultValue={stepBioData[STEP_NO]?.[field.name]}
                           error={errors[field.name]?.message}
                           type={field.type}
                           label={field.label}
                           register={register(field.name, field.registerOptions)}
                    />
                ))
            }
        </div>
    )
}
