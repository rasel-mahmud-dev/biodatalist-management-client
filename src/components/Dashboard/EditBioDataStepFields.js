import biodataOptions from "../../data/biodataOptions";
import Select from "components/Select";
import Input from "components/Input";
import React from "react";


// render for general bio data
export function generalInfoInput(errors, stepBioData, register) {
    const fields = [
        {
            label: "Biodata Type *",
            options: biodataOptions.biodataType,
            name: "biodataType",
            registerOptions: {
                required: "Biodata Type is required"
            }
        },
        {
            label: "Marital Status *",
            name: "maritalStatus",
            options: biodataOptions.maritalStatus,
            registerOptions: {
                required: "maritalStatus is required"
            }
        },
        {
            label: "Birth Year *",
            type: "date",
            name: "birthDay",
            registerOptions: {
                required: "Password is required",
                minLength: {value: 3, message: "Password should be greater than 3 character"}
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
            options: biodataOptions.bloodGroup,
            name: "nationality",
            registerOptions: {
                required: "Nationality is required"
            }
        },
    ]


    return (
        <div>
            <h2 className="font-medium text-xl  border-b border-primary/40">General Info</h2>
            {
                fields.map(field => (
                    field.options ? (
                        <Select error={errors[field.name]?.message} label={field.label}
                                defaultValue={stepBioData[0]?.[field.name]}
                                register={register(field.name, field.registerOptions)}>
                            <option value="">Select</option>
                            {field.options.map(opt => (
                                <option value={opt.value}>{opt.label}</option>
                            ))}
                        </Select>
                    ) : (
                        <Input
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


// render for Address bio data
export function addressInput(errors, stepBioData, register) {
    const fields = [
        {
            label: "Permanent Address",
            options: biodataOptions.biodataType,
            name: "permanentAddress",
            registerOptions: {
                required: "Permanent Address is required"
            }
        },
        {
            label: "Present Address",
            options: biodataOptions.biodataType,
            name: "presentAddress",
            registerOptions: {
                required: "Present Address is required"
            }
        }
    ]


    return (
        <div>
            <h2 className="font-medium text-xl  border-b border-primary/40">Address</h2>
            {
                fields.map(field => (
                    field.options ? (
                        <Select error={errors[field.name]?.message} label={field.label}
                                defaultValue={stepBioData[0]?.[field.name]}
                                register={register(field.name, field.registerOptions)}>
                            <option value="">Select</option>
                            {field.options.map(opt => (
                                <option value={opt.value}>{opt.label}</option>
                            ))}
                        </Select>
                    ) : (
                        <Input
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
