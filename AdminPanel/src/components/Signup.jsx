import React from "react";

function Signup(){
    return (
        <main className="main-container">
            <div className="container">
                <div className="title">ImmunTrack</div>
                <div className="title">Register</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </form>
            </div>
        </main>
    )
}

export default Signup