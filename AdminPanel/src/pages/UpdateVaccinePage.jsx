import Sidebar from "../components/Sidebar"
import UpdateVaccine from "../components/UpdateVaccine"
import { useState } from "react"
import Header from "../components/Header"

function UpdateVaccinePage(){
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <UpdateVaccine/>
        </>
    )
}

export default UpdateVaccinePage