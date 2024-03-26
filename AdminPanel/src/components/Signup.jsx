import React, { useState } from "react";
import { json, useNavigate } from 'react-router-dom';
import { BsHospital } from "react-icons/bs";

// Error message component
const ErrorMessage = ({ message }) => {
    return <div className="message">{message}</div>;
  };

function Signup(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/auth/user_register";

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let errors = {};

        if(!firstname){
            errors.firstname = "firstname is required";
        } else if(firstname.length > 20) {
            errors.firstname = "max length is 20";
        }

        if(!lastname){
            errors.lastname = "lastname is required";
        } else if(lastname.length > 20) {
            errors.lastname = "max length is 20";
        }

        if(!email.trim()) {
            errors.email = "email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)){
            errors.email = "email is invalid";
        }

        if(!password) {
            errors.password = "password is required";
        }

        if (!password) {
            errors.password = "password is required";
        } else if (password.length < 8) {
            errors.password = "password must be at least 8 characters long";
        } else if (!/(?=.*[a-z])/.test(password)) {
            errors.password = "password must contain at least one lowercase letter";
        } else if (!/(?=.*[A-Z])/.test(password)) {
            errors.password = "password must contain at least one uppercase letter";
        } else if (!/(?=.*\d)/.test(password)) {
            errors.password = "password must contain at least one digit";
        } else if (!/(?=.*[@$!%*?&])/.test(password)) {
            errors.password = "password must contain at least one special character (@$!%*?&)";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };


    const handleRegister = async (e) => {
        e.preventDefault();

        if(validateForm()){
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
        }
    };


    return (
        <main className="main-container">
            <div className="container">
                <div className='sidebar-brand'>
                        <BsHospital className='icon'/> ImmunTrack
                </div>
                <div className="title">Register</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstname(e.target.value)}
                                    value={firstname}
                                    error={errors.firstname}
                            />
                            {errors.firstname && <ErrorMessage message={errors.firstname} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text"
                                    placeholder="Last Name"
                                    onChange={(e) => setLastname(e.target.value)}
                                    value={lastname}
                                    error={errors.lastname}
                            />
                            {errors.lastname && <ErrorMessage message={errors.lastname} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    error={errors.email}
                            />
                            {errors.email && <ErrorMessage message={errors.email} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    error={errors.password}
                            />
                            {errors.password && <ErrorMessage message={errors.password} />}
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