import React, { useState } from "react";
import {
    BsFillBellFill,
    BsPeopleFill
} from 'react-icons/bs';
import { MdVaccines } from 'react-icons/md';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend, Line,
    LineChart,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../provider/authProvider";
import { jwtDecode } from "jwt-decode";
import { Button } from "flowbite-react";

function Home(){

    // const token = useSelector((state) => state.token.value)
    const {token} = useAuth();

    const user = jwtDecode(token);

    const navigate = useNavigate();

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
    ];

    const API_ENDPOINT_1 = "http://localhost:8083/api/v1/health_care/children_count";
    const API_ENDPOINT_2 = "http://localhost:8083/api/v1/health_care/vaccine_count";
    const API_ENDPOINT_3 = "http://localhost:8083/api/v1/health_care/report_count";

    const [childNum, setChildNum] = useState();
    const [vaccineNum, setVaccineNum] = useState();
    const [reportNum, setReportNum] = useState();


    fetch(API_ENDPOINT_1, {
        method: "get",
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setChildNum(json.num)
    })
    .catch(err => {
        console.log(err)
    })

    fetch(API_ENDPOINT_2, {
        method: "get",
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setVaccineNum(json.num)
    })
    .catch(err => {
        console.log(err)
    })

    fetch(API_ENDPOINT_3, {
        method: "get",
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setReportNum(json.num)
    })
    .catch(err => {
        console.log(err)
    })

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>ADMIN DASHBOARD</h3>
                <h3>{user.sub}</h3>
            </div>
            <div className="main-cards">
                <div className="card" onClick={() => navigate("/vaccine_table")}>
                    <div className="card-inner">
                        <h3>Vaccines</h3>
                        <MdVaccines className='card-icon'  />
                    </div>
                    <h1>{vaccineNum}</h1>
                </div>
                <div className="card" onClick={() => navigate("/children_table")}>
                    <div className="card-inner">
                        <h3>Children</h3>
                        <BsPeopleFill className='card-icon' />
                    </div>
                    <h1>{childNum}</h1>
                </div>
                <div className="card" onClick={() => navigate("/report")}>
                    <div className="card-inner">
                        <h3>Reports</h3>
                        <BsPeopleFill className='card-icon' />
                    </div>
                    <h1>{reportNum}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>Alerts</h3>
                        <BsFillBellFill className='card-icon' />
                    </div>
                    <h1>0</h1>
                </div>
            </div>
            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    )
}

export default Home