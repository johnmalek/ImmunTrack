import React, { useState } from "react"
import { json, useNavigate } from "react-router-dom";
import children from './ChildrenTable'

function UpdateChild(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/update_child";

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [sex, setSex] = useState();
    const [mother_name, setMotherName] = useState();
    const [mother_id_no, setMotherIdNo] = useState();
    const [mother_phone, setMotherPhone] = useState();
    const [location, setLocation] = useState();
    const [dob, setDob] = useState();
    const navigate = useNavigate();

    const payload = {
        firstname: firstname,
        lastname: lastname,
        sex: sex,
        mother_name: mother_name,
        mother_id_no: mother_id_no,
        mother_phone: mother_phone,
        location: location,
        dob: dob,
    }

    const handleUpdateChildInfo = (childId) => {
        fetch(UPDATE_ENDPOINT + `${childId}`, {
            method: "put"
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {
            console.log(err);
        })
    }
    

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Update Child Details + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" onChange={(e => setFirstname(e.target.value))} placeholder="First Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" onChange={(e => setLastname(e.target.value))} placeholder="Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Date of Birth</span>
                            <input type="text" onChange={(e => setDob(e.target.value))} placeholder="Date of Birth"/>
                            {/* <MyDatePicker /> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Sex</span>
                            <input type="text" onChange={(e => setSex(e.target.value))} placeholder="Sex"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Last Name</span>
                            <input type="text" onChange={(e => setMotherName(e.target.value))} placeholder="Mother's Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's ID No</span>
                            <input type="text" onChange={(e => setMotherIdNo(e.target.value))} placeholder="Mother's ID No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Phone No</span>
                            <input type="text" onChange={(e => setMotherPhone(e.target.value))} placeholder="Mother's Phone No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Location</span>
                            <input type="text" onChange={(e => setLocation(e.target.value))} placeholder="Location"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleUpdateChildInfo} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UpdateChild