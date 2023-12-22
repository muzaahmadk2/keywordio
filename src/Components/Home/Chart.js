import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import classes from "./Chart.module.css";

// const data = [
//   { label: 'Male', value: 40 },
//   { label: 'Female', value: 35 },
//   { label: 'Unknown', value: 25 },

// ];
const chartColors = ["#ff823c", "#0096ff", "#323c46"];

export default function DonutChart({ rows, total, value }) {
  const data = rows.map((row) => {
    const totalCost =
      typeof total[value] === "string"
        ? Number(total[value].replace(/[^0-9.]/g, ""))
        : total[value];
    console.log(totalCost);

    const percentage = Math.floor((row[value] / totalCost) * 100);
    return { label: `${percentage}% ${row.name}`, value: percentage };
  });
  return (
    <Stack direction="row">
      <PieChart
        colors={chartColors}
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 95,
            data,
            colors: chartColors,
          },
        ]}
        margin={{ right: 330 }}
        width={200}
        height={265}
        slotProps={{
          legend: {
            position: {
              vertical: "middle",
              horizontal: "right",
            },
            itemMarkWidth: 40,
            itemMarkHeight: 15,
            markGap: 15,
            itemGap: 15,
          },
        }}
      />
    </Stack>
  );
}
