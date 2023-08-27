import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function ProgressBar({ data }: any) {
  const BarChartData = data.data.user[0].mystats;
  modifyData(BarChartData);
  return (
    <div id="progressGraph">
      <h3>Task Bar Chart</h3>
      <BarChart
        width={500}
        height={300}
        data={BarChartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="object.name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

function modifyData(data: any) {
  for (let task of data) {
    if (task.amount >= 1000) {
      task.amount /= 1000;
    }
  }
}

export default ProgressBar;
