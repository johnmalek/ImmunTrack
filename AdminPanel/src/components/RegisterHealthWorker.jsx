import React from "react";

function RegisterHealthWorker(){
    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Register Healthworker + </div>
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
                            <span className="details">Designation</span>
                            <input type="text" placeholder="Designation"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Hospital</span>
                            <input type="text" placeholder="Hospital"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Password"/>
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

export default RegisterHealthWorker