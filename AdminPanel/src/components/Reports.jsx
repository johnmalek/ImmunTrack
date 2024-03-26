import React, { useState } from "react";
import MyDatePicker from "./MyDatePicker";
import MyDatePicker1 from "./MyDatePicker1";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

// Error message component
const ErrorMessage = ({ message }) => {
    return <div className="message">{message}</div>;
};

function Reports() {

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/add_report";

    const [child_name, setChildName] = useState("");
    const [vaccine_name, setVaccineName] = useState("");
    const [date_administered, setDateAdministered] = useState("");
    const [next_dose_date, setNextDoseDate] = useState("");
    const [remarks, setRemarks] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const {token} = useAuth();

    const validateForm = () => {
        let errors = {};

        if(!child_name){
            errors.child_name = "child name is required";
        } else if(child_name.length > 20) {
            errors.child_name = "max length is 20";
        }

        if(!vaccine_name){
            errors.vaccine_name = "vaccine name is required";
        } else if(vaccine_name.length > 40) {
            errors.vaccine_name = "max length is 40";
        }

        if (!remarks) {
            errors.remarks = "remarks required";
        } else if (remarks.length > 100) {
            errors.remarks = "max length is 100";
        }
    
        if (!date_administered) {
            errors.date_administered = "Date administered is required";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(date_administered)) {
            errors.date_administered = "Date must be in YYYY-mm-DD format";
        }

        if (!next_dose_date) {
            errors.next_dose_date = "Next Dose Date is required";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(next_dose_date)) {
            errors.next_dose_date = "Date must be in YYYY-mm-DD format";
        }



        setErrors(errors);

        return Object.keys(errors).length === 0;

    }

    const handleAddReport = async (e) => {
        e.preventDefault();

        if(validateForm()){
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
    }


    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Report + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Child Name</span>
                            <input type="text" 
                                    onChange={(e) => setChildName(e.target.value)} 
                                    placeholder="Child Name"
                                    value={child_name}
                                    error={errors.child_name}
                            />
                            {errors.child_name && <ErrorMessage message={errors.vaccine_name} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Vaccine Administered</span>
                            <input type="text" 
                                    onChange={(e) => setVaccineName(e.target.value)} 
                                    placeholder="Vaccine Administered"
                                    value={vaccine_name}
                                    error={errors.vaccine_name}
                            />
                            {errors.vaccine_name && <ErrorMessage message={errors.vaccine_name} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Date Administered</span>
                            <input type="text" 
                                    onChange={(e) => setDateAdministered(e.target.value)} 
                                    placeholder="Date Administered"
                                    value={date_administered}
                                    error={errors.date_administered}
                            />
                            {errors.date_administered && <ErrorMessage message={errors.date_administered} />}
                            {/* <MyDatePicker onChange={(e) => setDateAdministered(e.target.value)} /> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Next Dose Date</span>
                            <input type="text" 
                                    onChange={(e) => setNextDoseDate(e.target.value)} 
                                    placeholder="Vaccine Administered"
                                    value={next_dose_date}
                                    error={errors.next_dose_date}
                            />
                            {errors.next_dose_date && <ErrorMessage message={errors.next_dose_date} />}
                            {/* <MyDatePicker1 onChange={(e) => setNextDoseDate(e.target.value)}/> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Remarks</span>
                            <textarea
                                    cols={50}
                                    rows={6}
                                    onChange={(e) => setRemarks(e.target.value)} 
                                    placeholder="Remarks"
                                    value={remarks}
                                    error={errors.remarks}
                            />
                            {errors.remarks && <ErrorMessage message={errors.remarks} />}
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