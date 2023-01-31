import React, {useState} from 'react';
import Sidebar from "components/Sidebar";
import Link from "next/link";
import Avatar from "components/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../../store/slices/appSlice";
import Button from "components/Button";

const FilterBiodataSidebar = ({isOpen}) => {

    const {auth, biodata} = useSelector(state => state.authState)
    const dispatch = useDispatch()

    const filterType  = ["Filters", "Biodata No"]

    const [activeTab, setActiveTab] = useState(0)


    function renderFilterInputForm(){
        return (
            <div>
                <h2>asdasdasd</h2>
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
               </div>

            </Sidebar>
        </div>
    );
};

export default FilterBiodataSidebar;