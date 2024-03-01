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
                    <a href="/add_child">
                        <BsPeopleFill className='icon' /> Children
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/vaccine">
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
                <button className='logout-btn'>Logout</button>
            </div>
        </aside>
    )
}

export default Sidebar