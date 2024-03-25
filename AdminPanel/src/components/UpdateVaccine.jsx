import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function UpdateVaccine(){
    const UPDATE_ENDPOINT = "http://localhost:8083/api/v1/health_care/update_vaccine_info";
    const { vaccineId } = useParams();
    const navigate = useNavigate();

    const [vaccineInfo, setVaccineInfo] = useState({
        vaccineName: '',
        manufacturer: '',
        batchNo: '',
        expiryDate: '',
        quantity: ''
    });

    useEffect(() => {
        // Fetch vaccine information based on vaccine
        fetch(`http://localhost:8083/api/v1/health_care/vaccine/${vaccineId}`)
            .then(response => response.json())
            .then(data => {
                setVaccineInfo(data);
            })
            .catch(error => console.error('Error fetching vaccine information:', error));
    }, [vaccineId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVaccineInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleUpdateVaccineInfo = () => {
        fetch(`${UPDATE_ENDPOINT}/${vaccineId}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vaccineInfo)
        })
        .then(response => {
            if (response.ok) {
                alert("Vaccine information updated successfully");
                navigate('/vaccine_table'); 
            } else {
                throw new Error("Failed to update vaccine information");
            }
        })
        .catch(error => console.error('Error updating vaccine information:', error));
    }
    

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Update Vaccine Details</div>
                <form>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Vaccine Name</span>
                            <input type="text" name="vaccineName" value={vaccineInfo.vaccineName} onChange={handleInputChange} placeholder="Vaccine Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Manufacturer</span>
                            <input type="text" name="manufacturer" value={vaccineInfo.manufacturer} onChange={handleInputChange} placeholder="Manufacturer"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Batch No</span>
                            <input type="text" name="batchNo" value={vaccineInfo.batchNo} onChange={handleInputChange} placeholder="Batch No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Expiry Date</span>
                            <input type="text" name="expiryDate" value={vaccineInfo.expiryDate} onChange={handleInputChange} placeholder="Expiry Date"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" name="quantity" value={vaccineInfo.quantity} onChange={handleInputChange} placeholder="Quantity"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="button" onClick={handleUpdateVaccineInfo} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UpdateVaccine