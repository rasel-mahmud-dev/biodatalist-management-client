import React, {useState} from 'react';
import DashboardLayout from "../../Layout/Dashboard";
import Input from "components/Input";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import Select from "components/Select";
import Button from "components/Button";

const EditBiodata = () => {

    const [activeStep, setActiveStep] = useState(0)

    // store bio state step number as key and fields as object
    // like this {0: {biodataType: "value", ...}}
    const [bioData, setBiodata] = useState({

    })


    const steps = [
        "General Info",
        "Address",
        "Educational Qualifications",
        "Family Information",
        "Personal Information",
        "Occupational information",
        "Marriage related information",
        "Expected Life Partner",
        "Pledge",
        "Contact",
    ]


    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();


    function generalInfoInput(errors) {
        const fields = [
            {
                label: "Biodata Type *",
                options: [{value: "male-biodata", label: "Male Biodata"}, {
                    value: "female-biodata",
                    label: "Female Biodata"
                }],
                name: "biodataType",
                registerOptions: {
                    required: "Biodata Type is required"
                }
            },
            {
                label: "Marital Status *",
                name: "maritalStatus",
                options: [
                    {value: "Never Married", label: "Never Married"},
                    {value: "Married", label: "Married"},
                    {value: "Divorced", label: "Divorced"},
                    {value: "Window", label: "Window"},
                ],
                registerOptions: {
                    required: "maritalStatus is required"
                }
            },
            {
                label: "Birth Year *",
                type: "date",
                name: "birthDay ",
                registerOptions: {
                    required: "Password is required",
                    minLength: {value: 3, message: "Password should be greater than 3 character"}
                }
            },
            {
                label: "Height",
                options: [{value: "less than 4", label: "less than 4"}, {value: "4", label: "4feet"}],
                name: "height",
                registerOptions: {
                    required: "height is required"
                }
            },
            {
                label: "Blood Group",
                options: [{value: "A+", label: "A+"}, {value: "A-", label: "A-"}, {
                    value: "O+",
                    label: "O+"
                }, {value: "O-", label: "O-"}],
                name: "bloodGroup",
                registerOptions: {
                    required: "bloodGroup is required"
                }
            },
            {
                label: "Nationality",
                options: [{value: "Bangladeshi", label: "Bangladeshi"}],
                name: "nationality",
                registerOptions: {
                    required: "Nationality is required"
                }
            },
        ]

        return (
            <div>
                {
                    fields.map(field => (
                        field.options ? (
                            <Select error={errors[field.name]?.message} label={field.label}
                                    register={register(field.name, field.registerOptions)}>
                                <option value="">Select</option>
                                {field.options.map(opt => (
                                    <option value={opt.value}>{opt.label}</option>
                                ))}
                            </Select>
                        ) : (
                            <Input
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

    function onSubmit(data) {
        setBiodata(prevState => ({
            ...prevState,
            [activeStep]: data
        }))
        setActiveStep(prevState => prevState + 1)
    }


    return (
        <DashboardLayout containerClass="container-full">
            <h1>Dashboard Home</h1>

            <div className="max-w-3xl mx-auto ">

                <div className="flex justify-center gap-x-10">
                    <ul>
                        {steps.map((step, index) => (
                            <li className={`biodata-step-li ${activeStep === index ? "active" : ""}`}>
                                <h5 className="w-60 text-end mr-10">{step}</h5>
                                <div className="biodata-step-number">
                                    <h3>{index + 1}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="font-medium text-xl  border-b border-primary/40">General Info</h2>
                            <div className="mt-6">
                                {generalInfoInput(errors)}
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