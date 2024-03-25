import Home from "../components/Home"
import Settings from "../components/Settings"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import Header from "../components/Header"

function SettingsPage(){
    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }
    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar} />
            <Header OpenSideBar={OpenSideBar}/>
            <Settings />
        </>
    )
}

export default SettingsPage