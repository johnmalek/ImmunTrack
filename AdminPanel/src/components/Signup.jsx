import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/auth/user_register";

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post(API_ENDPOINT, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            });
            console.log(response.data);
            setMessage(response.data.message);
            navigate("/login");
        } catch (err){
            setMessage(err.message);
        }
    };

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">ImmunTrack</div>
                <div className="title">Register</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="First Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" onChange={(e) => setLastname(e.target.value)} placeholder="Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleRegister} value="Register" />
                    </div>
                    <p>Already have an account?</p>
                    <a href="/">Login</a>
                </form>
            </div>
        </main>
    )
}

export default Signup