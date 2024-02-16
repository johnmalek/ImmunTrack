import { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";

function HomePage() {

    const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

    const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
    }

    return (
        <>
            <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
            <Header OpenSideBar={OpenSideBar}/>
            <Home />
        </>
    )
}

export default HomePage