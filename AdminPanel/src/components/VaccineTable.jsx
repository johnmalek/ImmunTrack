import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

function VaccineTable() {
    return (
        <>
            <main className='main-container'>
                <div className='table-wrapper'>
                    <div className="title">Vaccines Inventory</div>
                    <table className='table'>
                        <thead>
                            <tr>
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
                            <tr>
                                <td>Vaccine 1</td>
                                <td>Moderna</td>
                                <td>0001</td>
                                <td>5/05/2024</td>
                                <td>500ml</td>
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
                                <td>Vaccine 2</td>
                                <td>Astazeneca</td>
                                <td>0002</td>
                                <td>15/05/2024</td>
                                <td>800ml</td>
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
                                <td>Vaccine 3</td>
                                <td>Johnson & Johnson</td>
                                <td>0003</td>
                                <td>25/05/2024</td>
                                <td>400ml</td>
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

export default VaccineTable