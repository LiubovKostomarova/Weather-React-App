import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );

const Chart = () => {
  const lineChartData = {
    labels: ["6:00 am", "10:00 am", "12:00 am", "6:00 pm", "10:00 pm"],
    datasets: [
      {
        label: 'Forecast',
        data: [0, 2, 10, 8, 5],
        color: "#ffffff",
        borderColor: "#ffffff",
        pointBackgroundColor: "#130E0E",
        fill: false,
        tension: 0.6
      }
    ]
  };

  return (
    <Line
      type="line"
      width={5}
      height={2}
      options={{
        title: {
          display: false,
        },
        legend: {
          display: false, 
        }
      }}
      data={lineChartData}
      
    />
  );
};
export default Chart;