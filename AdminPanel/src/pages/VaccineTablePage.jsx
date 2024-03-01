import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import VaccineTable from "../components/VaccineTable"

function VaccineTablePage() {
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <VaccineTable />
        </>
    )
}

export default VaccineTablePage