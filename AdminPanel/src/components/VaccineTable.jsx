import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

function VaccineTable() {

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/all_vaccines";

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

    return (
        <>
            <main className='main-container'>
                <div className='table-wrapper'>
                    <div className="title">Vaccines Inventory</div>
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
                                            <BsFillTrashFill className='delete-btn'/>
                                            <BsFillPencilFill />
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