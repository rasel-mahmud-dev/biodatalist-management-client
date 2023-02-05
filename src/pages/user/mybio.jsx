import React from 'react';
import DashboardLayout from "../../layout/Dashboard";
import {useSelector} from "react-redux";
import Button from "components/Button";
import ErrorMessage from "components/ErrorMessage";
import Link from "next/link";
import BiodateDetail from "components/BiodataDetail";
import withAuth from "../../hoc/withAuth";

const MyBio = () => {

    const authState = useSelector(state => state.authState)


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

                    <BiodateDetail biodata={authState.biodata}/>
                </div>
            )}

        </DashboardLayout>
    );
};

export default withAuth(["ADMIN", "CUSTOMER"])(MyBio);