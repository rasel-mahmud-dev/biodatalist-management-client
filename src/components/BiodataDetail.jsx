import React, {useEffect, useState} from 'react';

const BiodateDetail = ({biodata}) => {

    const bioDataSection = {
        "General Info": ["biodataType", "birthDay", "height", "bloodGroup", "nationality"],
        "Address": ["permanentAddress", "presentAddress"],
        "Educational Qualifications": ["educationMethod"],
        "Family Information": ["fatherName", "isFatherAlive"],
        "Occupational information": ["occupation"],
        "Marriage related information": ["maritalStatus"],
        "Contact": ["phone"],
    }


    const [bioGroup, setBioGroup] = useState({})

    // populate bio data group
    useEffect(() => {
        if (biodata) {
            makeBioDataToStepGroup()
        }
    }, [biodata])


    // make flat data to separate section
    function makeBioDataToStepGroup() {
        let updateBiodataSection = {}
        Object.keys(bioDataSection).forEach((key, index) => {
            let sectionItem = bioDataSection[key]
            updateBiodataSection[key] = {}
            sectionItem.forEach(name => {
                updateBiodataSection[key] = {
                    ...updateBiodataSection[key],
                    [name]: biodata[name]
                }
            })
        })
        setBioGroup(updateBiodataSection)
    }

    function renderAddress(value) {
        let str = ""
        if (typeof value === "object") {
            for (let valueKey in value) {
                if (value[valueKey]) {
                    str += ", " + value[valueKey]
                }
            }
        }
        return str.slice(1)
    }

    return (
        <div>
            {Object.keys(bioGroup).map(bioSectionName => (
                <div className="py-4">
                    <h3 className="font-medium text-2xl text-gray-800 border-b border-primary/20 py-1 mb-4">{bioSectionName}</h3>
                    <div>
                        {Object.keys(bioGroup[bioSectionName]).map(bioName => (
                            <div className="flex text-sm my-1">
                                <span className="font-medium block w-52">{bioName}</span>
                                <span
                                    className="text-gray-800">{typeof bioGroup[bioSectionName][bioName] === "string"
                                    ? bioGroup[bioSectionName][bioName]
                                    : renderAddress(bioGroup[bioSectionName][bioName])
                                }</span>
                            </div>
                        ))}
                    </div>
                </div>

            ))}
        </div>
    )
}


export default BiodateDetail;