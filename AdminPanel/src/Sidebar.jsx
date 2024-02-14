import React from 'react'
import {
    BsFillArchiveFill,
    BsFillGearFill,
    BsHospital,
    BsMenuButtonWideFill,
    BsPeopleFill
} from 'react-icons/bs'
import { MdVaccines } from 'react-icons/md'

function Sidebar({openSideBarToggle, OpenSideBar}){
    return(
        <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsHospital className='icon'/> ImmunTrack
                </div>
                <span className='icon close-icon' onClick={OpenSideBar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon' /> Children
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon' /> Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <MdVaccines className='icon' /> Vaccine Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar