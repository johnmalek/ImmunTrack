import Sidebar from "../components/Sidebar"
import UpdateChild from "../components/UpdateChild"
import { useState } from "react"
import Header from "../components/Header"

function UpdateChildPage(){
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar} />
            <Header OpenSideBar={OpenSideBar}/>
            <UpdateChild />
        </>
    )
}

export default UpdateChildPage