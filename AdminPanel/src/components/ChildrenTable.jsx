import React, { useState } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

function ChildrenTable(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/all_children";

    const [children, setChildren] = useState();
    

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
    })

    return (
        <>
            <main className='main-container'>
                <div className='table-wrapper'>
                    <div className="title">Children</div>
                    <table className='table'>
                        <thead>
                            <tr>
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
                            <tr>
                                <td>John</td>
                                <td>Malek</td>
                                <td>1995-3-13</td>
                                <td>Lony</td>
                                <td>10177780</td>
                                <td>0702766735</td>
                                <td>Juja</td>
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
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default ChildrenTable