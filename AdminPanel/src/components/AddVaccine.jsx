import React, { useState } from "react";
import MyDatePicker1 from "./MyDatePicker1";
import { useNavigate } from "react-router-dom";

// Error message component
const ErrorMessage = ({ message }) => {
    return <div className="message">{message}</div>;
};

function AddVaccine(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/add_vaccine";

    const [vaccineName, setVaccineName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [batchNo, setBatchNo] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const validateForm = () => {
        let errors = {};

        if(!vaccineName){
            errors.vaccineName = "vaccine name is required";
        } else if(vaccineName.length > 20) {
            errors.vaccineName = "max length is 20";
        }

        if(!manufacturer){
            errors.manufacturer = "manufacturer is required";
        } else if(manufacturer.length > 40) {
            errors.manufacturer = "max length is 40";
        }

        if (!batchNo) {
            errors.batchNo = "batch number is required";
        } else if (!/^\d+$/.test(batchNo)) {
            errors.batchNo = "number must contain only digits";
        }
    
        if (!quantity) {
            errors.quantity = "Quantity is required";
        }
    
        if (!expiryDate) {
            errors.expiryDate = "Expiry Date is required";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(expiryDate)) {
            errors.dob = "Date must be in YYYY-mm-DD format";
        }


        setErrors(errors);

        return Object.keys(errors).length === 0;

    }

    const handleAddVaccine = async (e) => {
        e.preventDefault();

        if(validateForm()){
            const payload = {
                vaccineName: vaccineName,
                manufacturer: manufacturer,
                batchNo: batchNo,
                expiryDate: expiryDate,
                quantity: quantity
            }
    
            fetch(API_ENDPOINT, {
                method: "post",
                body: JSON.stringify(payload),
                headers: {"Content-type" : "application/json"}
            })
            .then(response => response.json())
            .then(json => {
                navigate("/vaccine_table")
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
                <div className="title">Add Vaccine + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" 
                                    onChange={(e => setVaccineName(e.target.value))} 
                                    placeholder="Name"
                                    value={vaccineName}
                                    error={errors.vaccineName}
                            />
                            {errors.vaccineName && <ErrorMessage message={errors.vaccineName} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Manufacturer</span>
                            <input type="text" 
                                    onChange={(e => setManufacturer(e.target.value))} 
                                    placeholder="Manufacturer"
                                    value={manufacturer}
                                    error={errors.manufacturer}
                            />
                            {errors.manufacturer && <ErrorMessage message={errors.manufacturer} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Batch No</span>
                            <input type="text" 
                                    onChange={(e => setBatchNo(e.target.value))} 
                                    placeholder="Batch No"
                                    value={batchNo}
                                    error={errors.batchNo}
                            />
                            {errors.batchNo && <ErrorMessage message={errors.batchNo} />}
                        </div>
                        <div className="input-box">
                            <span className="details">Expiry Date</span>
                            <input type="text" 
                                    onChange={(e => setExpiryDate(e.target.value))} 
                                    placeholder="Expiry Date"
                                    value={expiryDate}
                                    error={errors.expiryDate}
                            />
                            {errors.expiryDate && <ErrorMessage message={errors.expiryDate} />}
                            {/* <MyDatePicker1 /> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" 
                                    onChange={(e => setQuantity(e.target.value))} 
                                    placeholder="Quantity"
                                    value={quantity}
                                    error={errors.quantity}
                            />
                            {errors.quantity && <ErrorMessage message={errors.quantity} />}
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" onClick={handleAddVaccine} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddVaccine