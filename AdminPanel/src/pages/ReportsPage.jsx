import Reports from "../components/Reports";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Header from "../components/Header";

function ReportsPage() {
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <Reports />
        </>
    )
}

export default ReportsPage