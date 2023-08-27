import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

function AuditRatio({ data }: any) {
  const auditData = data.data.user[0].audits;
  const [upAudits, downAudits] = sortAudits(auditData);
  const pieChartData = [
    { name: "Done", value: upAudits.length, fill: "gray" },
    { name: "Recieved", value: downAudits.length, fill: "rgb(67, 67, 213)" },
  ];
  return (
    <div id="progressGraph">
      <h3>Audits</h3>
      {data ? (
        <div text-align="center" align-items="center" justify-content="center">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={pieChartData}
              cx={200}
              cy={200}
              outerRadius={120}
              fill="#8884d8"
              label
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

function sortAudits(audits: any) {
  let upContainer = [];
  let downContainer = [];
  for (let audit of audits) {
    if (audit.type === "up") {
      upContainer.push(audit);
    } else {
      downContainer.push(audit);
    }
  }
  return [upContainer, downContainer];
}

export default AuditRatio;
