import React, { useState } from "react";
import { BsGear } from "react-icons/bs";

function Settings(){


    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Settings </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="input-box">
                            <span className="details">New Password</span>
                            <input type="text" placeholder="New Password"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm Password"/>
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

export default Settings