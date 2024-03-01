import { useState } from "react";
import ChildrenTable from "../components/ChildrenTable";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function ChildrenTablePage() {

    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <ChildrenTable />
        </>
    )
}

export default ChildrenTablePage