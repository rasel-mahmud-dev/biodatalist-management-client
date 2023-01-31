import React, {useState} from 'react';
import Sidebar from "components/Sidebar";
import Link from "next/link";
import Avatar from "components/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../../store/slices/appSlice";
import Button from "components/Button";
import {useForm} from "react-hook-form";
import {loginOrRegistrationAction} from "../../store/actions/authAction";
import Input from "components/Input";

const FilterBiodataSidebar = ({isOpen}) => {

    const {auth, biodata} = useSelector(state => state.authState)

    const dispatch  = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {



    }


    const filterType  = ["Filters", "Biodata No"]

    const [activeTab, setActiveTab] = useState(0)


    function renderFilterByNoForm(){
        return (
            <div>
                <Input
                    label="Biodata No"
                    error={errors["biodataNo"]?.message}
                    register={register("biodataNo", { required: "BiodataNo is required" })}
                />

            </div>
        )
    }


    function renderFilterBySearchForm(){
        return (
            <div>
                <h2>sdjkfhsdf</h2>
            </div>
        )
    }

    return (
        <div>
            <Sidebar onClose={()=>dispatch(toggleSidebar())} isOpen={isOpen} >

               <div className="p-4">
                   <div className="tab-root">
                       {filterType.map((item, i)=>(
                           <div onClick={()=>setActiveTab(i)} className={`tab ${activeTab === i ? "tab-active" : "" }`}>
                               <span>{item}</span>
                           </div>
                       ))}
                   </div>

                   <form onSubmit={handleSubmit(onSubmit)}>

                      {activeTab === 0 ? renderFilterByNoForm() :  renderFilterByNoForm()}

                      <Button className="my-20 mx-auto block">Search</Button>

                  </form>


               </div>

            </Sidebar>
        </div>
    );
};

export default FilterBiodataSidebar;