import React, {useEffect, useState} from 'react';
import DashboardLayout from "../../Layout/Dashboard";
import {useSelector} from "react-redux";
import Button from "components/Button";
import Popup from "components/Popup";
import ErrorMessage from "components/ErrorMessage";
import Link from "next/link";

const Dashboard = () => {

    const authState = useSelector(state => state.authState)


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
        if (authState.biodata) {
            makeBioDataToStepGroup()
        }
    }, [authState.biodata])


    // make flat data to separate section
    function makeBioDataToStepGroup() {
        let updateBiodataSection = {}
        Object.keys(bioDataSection).forEach((key, index) => {
            let sectionItem = bioDataSection[key]
            updateBiodataSection[key] = {}
            sectionItem.forEach(name => {
                updateBiodataSection[key] = {
                    ...updateBiodataSection[key],
                    [name]: authState.biodata[name]
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
        <DashboardLayout>

            <h1 className="route-title">My Bio Data</h1>

            {!authState.biodata ? (
                <div className="">
                    <ErrorMessage message="Biodata Not Provide Yet, Please Provide Your biodata"/>
                    <Link href="/user/edit-biodata">
                        <Button>Add Biodata</Button>
                    </Link>
                </div>
            ) : (
                <div>
                    {!authState.biodata?.isCompleted && <div className="">
                        <ErrorMessage message="Your biodata not completed, Please Provide all information"/>
                        <Link href="/user/edit-biodata">
                            <Button>Edit Biodata</Button>
                        </Link>
                    </div>}
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
            )}

        </DashboardLayout>
    );
};

export default Dashboard;