import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

// Error message component
const ErrorMessage = ({ message }) => {
  return <div className="message">{message}</div>;
};

function Settings(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/users";

    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const {token} = useAuth();

    const validateForm = () => {
        let errors = {};

        if(!email.trim()) {
            errors.email = "email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)){
            errors.email = "email is invalid";
        }

        if(!currentPassword){
            errors.currentPassword = "current password is required";
        }

        if(!newPassword){
            errors.newPassword = "new password is required";
        }

        if(!confirmPassword){
            errors.confirmPassword = "confirm password is required";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleChangePassword = (e) => {
        e.preventDefault();

        if(validateForm()){
            const payload = {
                email: email,
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword
            }

            fetch(API_ENDPOINT, {
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => response.json())
            .then(json => {
                console.log(json);
                navigate("/home");
            })
            .catch(err => {
                console.log("Error: ", err);
            })
        }
    }

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Settings </div>
                <form>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" error={errors.email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                            {errors.email && <ErrorMessage message={errors.email} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Current Password</span>
                            <input type="password" error={errors.currentPassword} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password" required/>
                            {errors.currentPassword && <ErrorMessage message={errors.currentPassword} />}
                        </div>
                        <div className="input-box">
                            <span className="details">New Password</span>
                            <input type="password" error={errors.newPassword} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required/>
                            {errors.newPassword && <ErrorMessage message={errors.newPassword} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" error={errors.confirmPassword} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required/>
                            {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword} />}
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleChangePassword} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Settings
