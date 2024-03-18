import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BsHospital,BsGoogle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {setter} from '../tokenSlice'


function Login(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/auth/user_login";

    const token = useSelector((state) => state.token.value);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const payload ={
            email: email,
            password: password
        }

        fetch(API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json?.token){
                dispatch(setter(json.token))
                navigate("/home")
            }
        })
        .catch(err => {
            console.log(err)
        })
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