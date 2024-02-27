import React from "react";
import MyDatePicker from "./MyDatePicker";

function AddChild(){
    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Add Child + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Date of Birth</span>
                            <MyDatePicker />
                        </div>
                        <div className="input-box">
                            <span className="details">Sex</span>
                            <input type="text" placeholder="Sex"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Last Name</span>
                            <input type="text" placeholder="Mother's Last Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's ID No</span>
                            <input type="text" placeholder="Mother's ID No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Mother's Phone No</span>
                            <input type="text" placeholder="Mother's Phone No"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Location</span>
                            <input type="text" placeholder="Location"/>
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

export default AddChild