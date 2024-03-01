import React from "react";
import MyDatePicker from "./MyDatePicker";
import MyDatePicker1 from "./MyDatePicker1";

function Reports() {
    return (
        <main className="main-container">
            <div className="container">
                <div className="title">Report + </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Child Name</span>
                            <input type="text" placeholder="Child Name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Vaccine Administered</span>
                            <input type="text" placeholder="Vaccine Administered"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Date Administered</span>
                            <MyDatePicker />
                        </div>
                        <div className="input-box">
                            <span className="details">Next Dose Date</span>
                            <MyDatePicker1 />
                        </div>
                        <div className="input-box">
                            <span className="details">Compiled By</span>
                            <input type="text" placeholder="Compiled By"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Remarks</span>
                            <input type="textarea" placeholder="Remarks"/>
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

export default Reports