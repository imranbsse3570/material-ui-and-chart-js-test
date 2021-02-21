import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [55, 89, 64, 27, 87, 49, 76],
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
