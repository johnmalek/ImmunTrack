import React from 'react'
import {
    BsFillArchiveFill,
    BsFillGearFill,
    BsHospital,
    BsMenuButtonWideFill,
    BsPeopleFill
} from 'react-icons/bs'
import { MdVaccines } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Sidebar({openSideBarToggle, OpenSideBar}){

    const LOGOUT_ENDPOINT = "http://localhost:8083/api/v1/auth/logout";


    return(
        <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <Link to="/home">
                    <div className='sidebar-brand'>
                        <BsHospital className='icon'/> ImmunTrack
                    </div>
                </Link>
                <span className='icon close-icon' onClick={OpenSideBar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/home">
                        <BsFillArchiveFill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/children_table">
                        <BsPeopleFill className='icon' /> Children
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/vaccine_table">
                        <MdVaccines className='icon' /> Vaccine Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/report">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
            </ul>
            <div>
                <a href="/logout">
                    <button className='logout-btn'>Logout</button>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar