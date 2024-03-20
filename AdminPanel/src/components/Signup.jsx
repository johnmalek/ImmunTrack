import React, { useState } from "react";
import axios from "axios";
import { json, useNavigate } from 'react-router-dom';
import { BsHospital } from "react-icons/bs";
import {useForm} from 'react-hook-form';

function Signup(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/auth/user_register";

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const handleRegister = async (e) => {
        e.preventDefault();

        const payload = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }

        fetch(API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-type': 'application/json' }
        }).then(response => response.json())
        .then(json => {
            navigate('/')
            console.log(json)
        }).catch(err => {
            console.log(err)
        })
    };


    return (
        <main className="main-container">
            <div className="container">
                <div className='sidebar-brand'>
                        <BsHospital className='icon'/> ImmunTrack
                </div>
                <div className="title">Register</div>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        {errors.firstName && <p className="text-error">First Name max length is 20</p>}
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text"
                                    placeholder="Last Name"
                                    onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        {errors.firstName && <p className="text-error">Last Name max length is 20</p>}
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <p className="text-error">Please check the Email</p>}
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <p className="text-error">Password requirements: 
                            <ul>
                                <li>Must contain at least one digit (0-9)</li>
                                <li>Must contain at least one letter (a-z or A-Z)</li>
                                <li>Must contain at least one special character (!@#$%^&*)</li>
                                <li>Must be between 8 and 20 characters long</li>
                                <li>Only allowed characters are letters (a-z or A-Z), digits (0-9), and special characters (!@#$%^&*)</li>
                            </ul>
                        </p>}
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleRegister} value="Register" />
                    </div>
                    <p>Already have an account?</p>
                    <a href="/">Login</a>
                </form>
                {message && <p>{message}</p>}
            </div>
        </main>
    )
}

export default Signup