import AddVaccine from "../components/AddVaccine";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Header from "../components/Header";

function VaccinePage(){
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <AddVaccine />
        </>
    )
}

export default VaccinePage