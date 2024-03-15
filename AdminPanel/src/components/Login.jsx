import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BsHospital,BsGoogle } from "react-icons/bs";

function Login(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/auth/user_login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await axios.post(API_ENDPOINT, {
                email: email,
                password: password,
            }, {withCredentials: true});

            navigate("/home");
        } catch (errole){
            console.error(error.message);
        }
    };


    return (
        <main className="main-container">
            <div className="container">
                {/* <div className="title">ImmunTrack</div> */}
                <div className='sidebar-brand'>
                        <BsHospital className='icon'/> ImmunTrack
                </div>
                <div className="title">Login</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleLogin} value="Login" />
                    </div>
                    <a href="#">Forgot Password?</a>
                    <p>Don't have an account?</p>
                    <a href="/signup">Sign up</a>
                    <p>Or login with:</p>
                    <BsGoogle />
                </form>
                {message && <p>{message}</p>}
            </div>
        </main>
    )
}

export default Login