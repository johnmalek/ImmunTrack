import React, { useState } from "react";
import MyDatePicker from "./MyDatePicker";
import { useNavigate } from "react-router-dom";

// Error message component
const ErrorMessage = ({ message }) => {
    return <div className="message">{message}</div>;
  };

function AddChild(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/add_child";

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [sex, setSex] = useState("");
    const [mother_name, setMotherName] = useState("");
    const [mother_id_no, setMotherIdNo] = useState("");
    const [mother_phone_no, setMotherPhone] = useState("");
    const [location, setLocation] = useState("");
    const [dob, setDob] = useState("");
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

        if(!sex){
            errors.sex = "sex is required";
        }

        if(!mother_name){
            errors.mother_name = "mother's name is required";
        } else if(mother_name > 20){
            errors.mother_name = "max length is 20"
        }

        if (!mother_id_no) {
            errors.mother_id_no = "ID number is required";
        } else if (!/^\d+$/.test(mother_id_no)) {
            errors.mother_id_no = "ID number must contain only digits";
        }
    
        if (!mother_phone_no) {
            errors.mother_phone_no = "Phone number is required";
        } else if (!/^\d+$/.test(mother_phone_no)) {
            errors.mother_phone_no = "Phone number must contain only digits";
        }
    
        if (!dob) {
            errors.dob = "Date is required";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
            errors.dob = "Date must be in YYYY-mm-DD format";
        }

        if(!location){
            errors.location = "location is required";
        } else if(location.length > 30){
            errors.location = "max length is 30";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;

    }

    const handleAddChild = async (e) => {
        e.preventDefault();

        if(validateForm()){
            const payload = {
                firstname: firstname,
                lastname: lastname,
                sex: sex,
                mother_name: mother_name,
                mother_id_no: mother_id_no,
                mother_phone_no: mother_phone_no,
                location: location,
                dob: dob
            }
    
            fetch(API_ENDPOINT, {
                method: "post",
                body: JSON.stringify(payload),
                headers: {"Content-type" : "application/json"}
            })
            .then(response => response.json())
            .then(json => {
                navigate("/children_table")
                console.log(json)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Add Child + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" 
                                    onChange={(e => setFirstname(e.target.value))} 
                                    placeholder="First Name"
                                    value={firstname}
                                    error={errors.firstname}
                            />
                            {errors.firstname && <ErrorMessage message={errors.firstname} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" 
                                    onChange={(e => setLastname(e.target.value))} 
                                    placeholder="Last Name"
                                    value={lastname}
                                    error={errors.lastname}
                            />
                            {errors.lastname && <ErrorMessage message={errors.lastname} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Date of Birth</span>
                            <input type="text" 
                                    onChange={(e => setDob(e.target.value))} 
                                    placeholder="Date of Birth"
                                    value={dob}
                                    error={errors.dob}
                            />
                            {errors.dob && <ErrorMessage message={errors.dob} />}
                            {/* <MyDatePicker /> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Sex</span>
                            <input type="text" 
                                    onChange={(e => setSex(e.target.value))} 
                                    placeholder="Sex"
                                    value={sex}
                                    error={errors.sex}
                            />
                            {errors.sex && <ErrorMessage message={errors.sex} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Last Name</span>
                            <input type="text" 
                                    onChange={(e => setMotherName(e.target.value))} 
                                    placeholder="Mother's Last Name"
                                    value={mother_name}
                                    error={errors.mother_name}
                            />
                            {errors.mother_name && <ErrorMessage message={errors.mother_name} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's ID No</span>
                            <input type="text" 
                                    onChange={(e => setMotherIdNo(e.target.value))}    
                                    placeholder="Mother's ID No"
                                    value={mother_id_no}
                                    error={errors.mother_id_no}
                            />
                            {errors.mother_id_no && <ErrorMessage message={errors.mother_id_no} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Phone No</span>
                            <input type="text" 
                                    onChange={(e => setMotherPhone(e.target.value))} 
                                    placeholder="Mother's Phone No"
                                    value={mother_phone_no}
                                    error={errors.mother_phone_no}
                            />
                            {errors.mother_phone_no && <ErrorMessage message={errors.mother_phone_no} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Location</span>
                            <input type="text" 
                                    onChange={(e => setLocation(e.target.value))} 
                                    placeholder="Location"
                                    value={location}
                                    error={errors.location}
                            />
                            {errors.location && <ErrorMessage message={errors.location} />}
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleAddChild} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddChild