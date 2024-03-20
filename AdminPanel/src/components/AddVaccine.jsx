import React, { useState } from "react";
import MyDatePicker1 from "./MyDatePicker1";
import { useNavigate } from "react-router-dom";

function AddVaccine(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/add_vaccine";

    const [vaccineName, setVaccineName] = useState();
    const [manufacturer, setManufacturer] = useState();
    const [batchNo, setBatchNo] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [quantity, setQuantity] = useState();
    const navigate = useNavigate();

    const handleAddVaccine = async (e) => {
        e.preventDefault();

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

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Add Vaccine + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" onChange={(e => setVaccineName(e.target.value))} placeholder="Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Manufacturer</span>
                            <input type="text" onChange={(e => setManufacturer(e.target.value))} placeholder="Manufacturer"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Batch No</span>
                            <input type="text" onChange={(e => setBatchNo(e.target.value))} placeholder="Batch No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Expiry Date</span>
                            <input type="text" onChange={(e => setExpiryDate(e.target.value))} placeholder="Expiry Date"/>
                            {/* <MyDatePicker1 /> */}
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" onChange={(e => setQuantity(e.target.value))} placeholder="Quantity"/>
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