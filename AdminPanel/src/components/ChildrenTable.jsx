import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

function ChildrenTable(){


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
                                <th>Mother's Name</th>
                                <th>Mother's Phone</th>
                                <th>Residence</th>
                                <th>Vaccination Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>Jane</td>
                                <td>0712345678</td>
                                <td>Kakuma 1</td>
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
                            <tr>
                                <td>Jane</td>
                                <td>Dong</td>
                                <td>Susan</td>
                                <td>0712345678</td>
                                <td>Kakuma 2</td>
                                <td>
                                    <span className='label label-draft'>Draft</span>
                                </td>
                                <td>
                                    <span className='actions'>
                                        <BsFillTrashFill className='delete-btn'/>
                                        <BsFillPencilFill />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Ann</td>
                                <td>Jok</td>
                                <td>Peris</td>
                                <td>0712345678</td>
                                <td>Kakuma 3</td>
                                <td>
                                    <span className='label label-error'>Error</span>
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