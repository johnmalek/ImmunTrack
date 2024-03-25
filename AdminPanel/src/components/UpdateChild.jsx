import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateChild(){

    const UPDATE_ENDPOINT = "http://localhost:8083/api/v1/health_care/update_child_info";
    const { childId } = useParams();
    const navigate = useNavigate();

    const [childInfo, setChildInfo] = useState({
        firstname: '',
        lastname: '',
        sex: '',
        mother_name: '',
        mother_id_no: '',
        mother_phone_no: '',
        location: '',
        dob: ''
    });

    useEffect(() => {
        // Fetch child information based on childId
        fetch(`http://localhost:8083/api/v1/health_care/child/${childId}`)
            .then(response => response.json())
            .then(data => {
                setChildInfo(data); // Set childInfo state with fetched data
            })
            .catch(error => console.error('Error fetching child information:', error));
    }, [childId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChildInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleUpdateChildInfo = () => {
        fetch(`${UPDATE_ENDPOINT}/${childId}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(childInfo)
        })
        .then(response => {
            if (response.ok) {
                alert("Child information updated successfully");
                navigate('/children_table'); // Navigate back to children table
            } else {
                throw new Error("Failed to update child information");
            }
        })
        .catch(error => console.error('Error updating child information:', error));
    }
    

    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Update Child Details</div>
                <form>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" name="firstname" value={childInfo.firstname} onChange={handleInputChange} placeholder="First Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" name="lastname" value={childInfo.lastname} onChange={handleInputChange} placeholder="Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Date of Birth</span>
                            <input type="text" name="dob" value={childInfo.dob} onChange={handleInputChange} placeholder="Date of Birth"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Sex</span>
                            <input type="text" name="sex" value={childInfo.sex} onChange={handleInputChange} placeholder="Sex"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Last Name</span>
                            <input type="text" name="mother_name" value={childInfo.mother_name} onChange={handleInputChange} placeholder="Mother's Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's ID No</span>
                            <input type="text" name="mother_id_no" value={childInfo.mother_id_no} onChange={handleInputChange} placeholder="Mother's ID No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Phone No</span>
                            <input type="text" name="mother_phone_no" value={childInfo.mother_phone_no} onChange={handleInputChange} placeholder="Mother's Phone No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Location</span>
                            <input type="text" name="location" value={childInfo.location} onChange={handleInputChange} placeholder="Location"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="button" onClick={handleUpdateChildInfo} value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UpdateChild;
