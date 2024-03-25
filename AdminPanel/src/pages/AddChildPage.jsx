import AddChild from "../components/AddChild";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Header from "../components/Header";

function AddChildPage(){
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <AddChild />
        </>
    )
}

export default AddChildPage