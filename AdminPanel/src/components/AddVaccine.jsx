import React from "react";
import MyDatePicker1 from "./MyDatePicker1";

function AddVaccine(){
    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Add Vaccine + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Manufacturer</span>
                            <input type="text" placeholder="Manufacturer"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Batch No</span>
                            <input type="text" placeholder="Batch No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Expiry Date</span>
                            <MyDatePicker1 />
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" placeholder="Quantity"/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddVaccine