import React, { useState } from "react";
import MyDatePicker from "./MyDatePicker";
import MyDatePicker1 from "./MyDatePicker1";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

function Reports() {

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/add_report";

    const [child_name, setChildName] = useState();
    const [vaccine_name, setVaccineName] = useState();
    const [date_administered, setDateAdministered] = useState();
    const [next_dose_date, setNextDoseDate] = useState();
    const [remarks, setRemarks] = useState();
    const navigate = useNavigate();
    const {token} = useAuth();

    const handleAddReport = async (e) => {
        e.preventDefault();

        const payload = {
            child_name: child_name,
            vaccine_name: vaccine_name,
            date_administered: date_administered,
            next_dose_date: next_dose_date,
            remarks: remarks
        }

        fetch(API_ENDPOINT, {
            method: "post",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`    
            }
        })
        .then(response => response.json())
        .then(json => {
            navigate("/home")            
            console.log(json)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Report + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Child Name</span>
                            <input type="text" onChange={(e) => setChildName(e.target.value)} placeholder="Child Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Vaccine Administered</span>
                            <input type="text" onChange={(e) => setVaccineName(e.target.value)} placeholder="Vaccine Administered"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Date Administered</span>
                            <input type="text" onChange={(e) => setDateAdministered(e.target.value)} placeholder="Date Administered"/>
                        
                            {/* <MyDatePicker onChange={(e) => setDateAdministered(e.target.value)} /> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Next Dose Date</span>
                            <input type="text" onChange={(e) => setNextDoseDate(e.target.value)} placeholder="Vaccine Administered"/>
                        
                            {/* <MyDatePicker1 onChange={(e) => setNextDoseDate(e.target.value)}/> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Remarks</span>
                            <input type="textarea" rows="10" cols="30" onChange={(e) => setRemarks(e.target.value)} placeholder="Remarks"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleAddReport} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Reports