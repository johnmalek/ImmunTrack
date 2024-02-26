import React from "react";

function Login(){
    return (
        <main className="main-container">
            <div className="container">
                <div className="title">ImmunTrack</div>
                <div className="title">Login</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Login" />
                    </div>
                    <a href="#">Forgot Password?</a>
                </form>
            </div>
        </main>
    )
}

export default Login