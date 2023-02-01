import React, {useState} from 'react';
import Sidebar from "components/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../../store/slices/appSlice";
import Button from "components/Button";
import {useForm} from "react-hook-form";
import Input from "components/Input";
import {changeFilter, clearFilter} from "../../store/slices/biodataSlice";
import {FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp} from "react-icons/fa";
import Select from "components/Select";
import biodataOptions from "../../data/biodataOptions";
import Accordion from "components/Accordion";

const FilterBiodataSidebar = () => {

    const {
        appState: {isOpenSidebar},
        biodataState: {filter}
    } = useSelector(state => state)

    const filterType  = ["Filters", "Biodata No"]
    const [activeTab, setActiveTab] = useState(0)

    const dispatch  = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        dispatch(changeFilter({
            ...data
        }))
    }

    function handleClearFilterValue(){
        reset()
        dispatch(clearFilter())
    }

    const [openAccordionIds, setOpenAccordionIds] = useState([])

    function handleToggle(dataId){
        if(openAccordionIds.includes(dataId)){
            setOpenAccordionIds(openAccordionIds.filter(item=> item !== dataId))
        } else {
            setOpenAccordionIds([...openAccordionIds, dataId])
        }
    }
    function isOpenExpandAccordion(id){
        return openAccordionIds.includes(id)
    }

    function renderFilterForm(){
        return (
            <div>

                <div>
                    <Accordion openIds={openAccordionIds}>
                        <Accordion.Item dataId={1} className="cursor-pointer">
                            <div onClick={()=>handleToggle(1)} className="flex items-center justify-between border-b border-primary pb-2">
                                <h4 className="font-medium text-sm">Primary</h4>
                                {isOpenExpandAccordion(1) ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            <div>
                                <Select
                                    label="Biodata Type"
                                    error={errors["biodataType"]?.message}
                                    option={biodataOptions.biodataType}
                                    register={register("biodataType")}
                                >
                                    <option value="">Select</option>
                                    {biodataOptions.biodataType.map(opt => (
                                        <option value={opt.value}>{opt.label}</option>
                                    ))}
                                </Select>
                                <Select
                                    label="Marriage Status"
                                    error={errors["maritalStatus"]?.message}
                                    option={biodataOptions.maritalStatus}
                                    register={register("maritalStatus")}
                                >
                                    <option value="">Select</option>
                                    {biodataOptions.maritalStatus.map(opt => (
                                        <option value={opt.value}>{opt.label}</option>
                                    ))}
                                </Select>
                            </div>
                        </Accordion.Item>

                        <Accordion.Item dataId={2} className="cursor-pointer">
                            <div onClick={()=>handleToggle(2)} className="flex items-center justify-between border-b border-primary pb-2 mt-10">
                                <h4 className="font-medium text-sm">Address</h4>
                                {isOpenExpandAccordion(2) ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            <div>
                                <h2>Abither ksdfhksjd hsdjkfh sdjkf</h2>
                                <h2>Abither ksdfhksjd hsdjkfh sdjkf</h2>
                                <h2>Abither ksdfhksjd hsdjkfh sdjkf</h2>
                                <h2>Abither ksdfhksjd hsdjkfh sdjkf</h2>
                                <h2>Abither ksdfhksjd hsdjkfh sdjkf</h2>
                                <h2>Abither ksdfhksjd hsdjkfh sdjkf</h2>
                            </div>

                        </Accordion.Item>
                    </Accordion>
                </div>
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

                   {/**** clear all filter ****/}
                   <Button onClick={handleClearFilterValue} className="mt-4 block ml-auto">Clear Filter</Button>

                   <form onSubmit={handleSubmit(onSubmit)} className="mt-10">

                      {activeTab === 0 ? renderFilterForm() : (
                          <div>
                              <Input
                                  label="Biodata No"
                                  error={errors["biodataNo"]?.message}
                                  register={register("biodataNo")}
                              />

                          </div>
                      )}

                      <Button className="my-20 mx-auto block">Search</Button>

                  </form>


               </div>

            </Sidebar>
        </div>
    );
};

export default FilterBiodataSidebar;