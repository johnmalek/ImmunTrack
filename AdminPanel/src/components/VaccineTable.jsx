import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate, useParams } from "react-router-dom";

function VaccineTable() {

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/all_vaccines";
    const DELETE_ENDPOINT = "http://localhost:8083/api/v1/health_care/delete_vaccine";
    const navigate = useNavigate();

    const [vaccines, setVaccines] = useState();

    useEffect(() => {
        fetch(API_ENDPOINT, {
            method: "get",
            headers: {"Content-type": "application/json"}
        })
        .then(response => response.json())
        .then(json => {
            if(json?.vaccines){
                setVaccines(json.vaccines)
                console.log(json.vaccines)
            }
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    const deleteVaccine = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this vaccine record?");
        if(confirmDelete){
            const vaccineId = vaccines[index].id;
            fetch(`${DELETE_ENDPOINT}/${vaccineId}`, {
                method: "delete"
            })
            .then(response => {
                if (response.ok) {
                    const updatedVaccines = [...vaccines];
                    updatedVaccines.splice(index, 1);
                    setVaccines(updatedVaccines);
                    alert("vaccine record deleted successfully");
                }
            })
            .catch(error => console.error('Error deleting vaccine:', error));
        }
    };


    return (
        <>
            <main className='main-container'>
                <div className='table-wrapper'>
                <div className="title">Vaccines
                        <button className="add-child-btn" onClick={() => navigate("/add_vaccine")}>Add Vaccine</button>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S/n</th>
                                <th>Name</th>
                                <th className='expand'>Manufacturer</th>
                                <th>Batch No</th>
                                <th>Expiry Date</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {vaccines && vaccines.map((vaccine, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{vaccine.vaccineName}</td>
                                    <td>{vaccine.manufacturer}</td>
                                    <td>{vaccine.batchNo}</td>
                                    <td>{vaccine.expiryDate}</td>
                                    <td>{vaccine.quantity}</td>
                                    <td>
                                        <span className='label label-live'>Live</span>
                                    </td>
                                    <td>
                                        <span className='actions'>
                                            <BsFillTrashFill className='delete-btn' onClick={() => deleteVaccine(index)}/>
                                            <BsFillPencilFill className='edit-btn' onClick={() => navigate(`/update_vaccine/${vaccine.id}`)}/>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default VaccineTable