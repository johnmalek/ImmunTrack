import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

function AdminTable() {

    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <Table />
        </>
    )
}

export default AdminTable