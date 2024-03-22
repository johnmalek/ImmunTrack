import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

function ChildrenTable(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/all_children";

    const [children, setChildren] = useState();
    

    useEffect(() => {
        fetch(API_ENDPOINT, {
            method: "get",
            headers: {"Content-type": "application/json"}
        })
        .then(response => response.json())
        .then(json => {
            if(json?.children){
                setChildren(json.children)
                console.log(json.children)
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
                    <div className="title">Children</div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S/n</th>
                                <th>First Name</th>
                                <th className='expand'>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Mother's Name</th>
                                <th>Mother's ID No</th>
                                <th>Mother's Phone</th>
                                <th>Location</th>
                                <th>Vaccination Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children && children.map((child, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{child.firstname}</td>
                                    <td>{child.lastname}</td>
                                    <td>{child.dob}</td>
                                    <td>{child.mother_name}</td>           
                                    <td>{child.mother_id_no}</td>
                                    <td>{child.mother_phone_no}</td>
                                    <td>{child.location}</td>
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

export default ChildrenTable