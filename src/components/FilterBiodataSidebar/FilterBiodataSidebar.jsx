import React, {useState} from 'react';
import Sidebar from "components/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../../store/slices/appSlice";
import Button from "components/Button";
import {useForm} from "react-hook-form";
import Input from "components/Input";

const FilterBiodataSidebar = ({onSearchBioData}) => {

    const {isOpenSidebar} = useSelector(state => state.appState)

    const filterType  = ["Filters", "Biodata No"]
    const [activeTab, setActiveTab] = useState(1)

    const dispatch  = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        onSearchBioData(data)
    }


    function renderFilterByNoForm(){
        return (
            <div>
                <Input
                    label="Biodata No"
                    error={errors["biodataNo"]?.message}
                    register={register("biodataNo")}
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
            <Sidebar onClose={()=>dispatch(toggleSidebar())} isOpen={isOpenSidebar} >

               <div className="p-4">
                   <div className="tab-root">
                       {filterType.map((item, i)=>(
                           <div key={i} onClick={()=>setActiveTab(i)} className={`tab ${activeTab === i ? "tab-active" : "" }`}>
                               <span>{item}</span>
                           </div>
                       ))}
                   </div>

                   <form onSubmit={handleSubmit(onSubmit)} className="mt-10">

                      {activeTab === 0 ? renderFilterByNoForm() :  renderFilterByNoForm()}

                      <Button className="my-20 mx-auto block">Search</Button>

                  </form>


               </div>

            </Sidebar>
        </div>
    );
};

export default FilterBiodataSidebar;