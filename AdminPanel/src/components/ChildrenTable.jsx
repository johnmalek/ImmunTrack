import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function ChildrenTable(){

    const API_ENDPOINT = "http://localhost:8083/api/v1/health_care/all_children";
    const DELETE_ENDPOINT = "http://localhost:8083/api/v1/health_care/delete_child";

    const [children, setChildren] = useState();
    const navigate = useNavigate();

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

    const deleteChild = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this child record?");
        if(confirmDelete){
            fetch(DELETE_ENDPOINT + `/${children[index].id}`, {
                method: "delete"
            })
            .then(response => {
                if (response.ok) {
                    const updatedChildren = [...children];
                    updatedChildren.splice(index, 1);
                    setChildren(updatedChildren);
                    alert("child record deleted successfully");
                }
            })
            .catch(error => console.error('Error deleting child:', error));
        }
    };

    

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
                                        <span className='label label-live'>Ongoing</span>
                                    </td>
                                    <td>
                                        <span className='actions'>
                                            <BsFillTrashFill className='delete-btn' onClick={() => deleteChild(index)}/>
                                            <BsFillPencilFill className='edit-btn' onClick={() => navigate(`/update_child/${child.id}`)}/>
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