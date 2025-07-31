import React from 'react'
import { LineChart } from "recharts";

const Ecommerce2 = () => {
  return (
    <div>

<LineChart
  width={500}
  height={300}
  series={[
    { curve: "linear", data: [1, 5, 2, 6, 3, 9.3] },
    { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
  ]}
/>
    </div>
  )
}

export default Ecommerce2
