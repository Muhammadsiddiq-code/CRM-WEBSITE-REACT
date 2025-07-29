// components/MiniChart.js
import React from "react";
import {
//   LineChart,
//   Line,
  ResponsiveContainer,
  Area,
  AreaChart,
  Tooltip,
//   defs,
} from "recharts";

const data = [
  { value: 20 },
  { value: 40 },
  { value: 25 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 30 },
  { value: 75 },
  { value: 10 },
];

const Chart1 = () => {
  return (
    <div style={{ width: "200px", height: "65px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip cursor={false} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            fill="url(#gradientLine)"
            strokeWidth={3}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart1;
