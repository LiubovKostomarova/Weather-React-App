import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const lineChartData = {
    labels: ["6:00 am", "10:00 am", "12:00 am", "6:00 pm", "10:00 pm"],
    datasets: [
      {
        data: [0, 2, 10, 8, 5],
        borderColor: "#811D1D",
        fill: true,
        lineTension: 0.5
      }
    ]
  };

  return (
    <Line
      type="line"
      width={5}
      height={5}
      options={{
        title: {
          display: false,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={lineChartData}
    />
  );
};
export default Chart;