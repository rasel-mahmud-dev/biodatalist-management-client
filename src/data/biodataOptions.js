const biodataOptions = {
    biodataType: [{value: "male-biodata", label: "Male Biodata"}, {
        value: "female-biodata",
        label: "Female Biodata"
    }],
    maritalStatus: [
        {value: "Never Married", label: "Never Married"},
        {value: "Married", label: "Married"},
        {value: "Divorced", label: "Divorced"},
        {value: "Window", label: "Window"},
    ],

    height: [
        {value: "less than 4", label: "less than 4"},
        {value: "4", label: "4 feet"},
        {value: "4.1", label: "4.1 feet"},
        {value: "4.5", label: "4.5 feet"},
        {value: "5", label: "5 feet"},
        {value: "5.5", label: "5.5 feet"},
        {value: "6", label: "6 feet"},
    ],

    bloodGroup: [
        {value: "A+", label: "A+"},
        {value: "A-", label: "A-"},
        {
        value: "O+",
        label: "O+"},
        {value: "O-", label: "O-"}
    ],

    nationality: [{value: "Bangladeshi", label: "Bangladeshi"}],

    educationMethod: [{value: "General", label: "General"}, {value: "Alia", label: "Alia"}],
    fatherAliveOptions: [{value: "Yes Alive", label: "Yes Alive"}, {value: "No Alive", label: "No Alive"}],
    occupations: [
        {value: "Student", label: "Student"},
        {value: "Gov.Job", label: "Gov.Job"},
        {value: "Private.Job", label: "Private.Job"},
        {value: "UnEmployee", label: "UnEmployee"},
        {value: "Business", label: "Business"},
    ]
}

export default biodataOptions