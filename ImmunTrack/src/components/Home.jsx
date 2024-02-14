import React from "react";
import {
    BsFillBellFill,
    BsPeopleFill
} from 'react-icons/bs';
import { MdVaccines } from 'react-icons/md';

function Home(){
    return (
        <main className="main-container">
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>
            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <h3>Vaccines</h3>
                        <MdVaccines className='card-icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>Children</h3>
                        <BsPeopleFill className='card-icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>Reports</h3>
                        <BsPeopleFill className='card-icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>Alerts</h3>
                        <BsFillBellFill className='card-icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className="container">
                <div className="title">Add Child + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Date of Birth</span>
                            <input type="text" placeholder="Date of Birth"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Sex</span>
                            <input type="text" placeholder="Sex"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Last Name</span>
                            <input type="text" placeholder="Mother's Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's ID No</span>
                            <input type="text" placeholder="Mother's ID No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Phone No</span>
                            <input type="text" placeholder="Mother's Phone No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Location</span>
                            <input type="text" placeholder="Location"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Home