import React, { useState, useContext } from "react";
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import { AuthContext } from "../auth.js";

const Analytics = () => {
    const [barChart, setBarChart] = useState({});
    const { currentUser } = useContext(AuthContext);

    const barChartClick = (e) => {
        axios
            .get(`http://localhost:5000/problems/analytics/${currentUser.uid}`)
                .then((res) => {
                    console.log(res.data)
                    const chartData = {
                        labels: res.data.labels,
                        datasets: [
                            {
                                label: res.data.title,
                                data: res.data.data
                            }
                        ]
                    }
                    console.log(chartData);
                    setBarChart(chartData);
                });
            };

    return (
        <>
        <h4>Analytics Page</h4>
        <button onClick={(e) => barChartClick(e)}>Bar Chart</button>
        <Bar
            data={barChart}
        options={{
            title: {
                display: true,
                text: "Problems Solved",
                fontSize:20
            },
            legend: {
                display: true,
                position: 'right'
            }
        }}
        />
        </>
    );
};

export default Analytics;
