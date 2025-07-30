import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group B', value: 400, color: 'blue' },
    { label: 'Group A', value: 400, color: '#FFBB28' },
  { label: 'Group C', value: 800, color: 'dodgerblue' },
//   { label: 'Group D', value: 200, color: '#FF8042' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

export default function Chart2() {
  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data, }]}
      {...settings}
    />
  );
}