import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

function LineGraph({ data }: any) {
  const LineChartData = data.data.user[0].mystats;
  modifyData(LineChartData);
  return (
    <div id="progressGraph">
      <h3>Progress line chart</h3>
      <LineChart
        width={500}
        height={300}
        data={LineChartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="object.name" /> {/* X-axis based on 'date' */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
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
export default LineGraph;
