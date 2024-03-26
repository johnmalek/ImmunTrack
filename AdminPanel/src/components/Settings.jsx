// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../provider/authProvider";


// function Settings(){

//     const API_ENDPOINT = "http://localhost:8083/api/v1/users";

//     const [email, setEmail] = useState();
//     const [currentPassword, setCurrentPassword] = useState();
//     const [newPassword, setNewPassword] = useState();
//     const [confirmPassword, setConfirmPassword] = useState();
//     const [message, setMessage] = useState();

//     const navigate = useNavigate();
//     const {token} = useAuth();

//     const payload = {
//         email: email,
//         currentPassword: currentPassword,
//         newPassword: newPassword,
//         confirmPassword: confirmPassword
//     }

//     const handleChangePassword = (e) => {
//         e.preventDefault();

//         fetch(API_ENDPOINT, {
//             method: "PATCH",
//             headers: {
//                 "Content-type": "application/json",
//                 "Authorization": `Bearer ${token}` 
//             },
//             body: JSON.stringify(payload)
//         })
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             setMessage(json.message)
//             if(json?.message){
//                 setMessage(json.message)
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     return (
//         <main className="main-container">
//             <div className="container">
//                 <div className="title">Settings </div>
//                 <form action="#">
//                     <div className="user-details">
//                         <div className="input-box">
//                             <span className="details">Email</span>
//                             <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Current Password</span>
//                             <input type="password" onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password"/>
//                         </div>
//                         <div className="input-box">
//                             <span className="details">New Password</span>
//                             <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password"/>
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Confirm Password</span>
//                             <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
//                         </div>
//                     </div>
//                     <div className="button">
//                         <input type="submit" onClick={handleChangePassword} value="Submit" />
//                     </div>
//                 </form>
//             </div>
//         </main>
//     )
// }

// export default Settings

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

// Error message component
const ErrorMessage = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

function Settings(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/users";

    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const {token} = useAuth();

    const payload = {
        email: email,
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
    }

    const handleChangePassword = (e) => {
        e.preventDefault();

        fetch(API_ENDPOINT, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Password change failed.');
            }
        })
        .then(json => {
            console.log(json)
            navigate("/home")
        })
        .catch(error => {
            setError(error.message || "An error occurred while changing password.");
        })
    }

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Settings </div>
                <form>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Current Password</span>
                            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password"/>
                        </div>
                        <div className="input-box">
                            <span className="details">New Password</span>
                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                        </div>
                        {error && <ErrorMessage message={error} />}
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
