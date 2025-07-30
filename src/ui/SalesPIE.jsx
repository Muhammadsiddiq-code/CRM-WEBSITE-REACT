// import React from 'react';

// const SalesPIE = () => {
//   // Sample data - replace with your actual data
//   const salesData = [
//     { date: '20 Jan', revenue: 120 },
//     { date: '21 Jan', revenue: 180 },
//     { date: '22 Jan', revenue: 150 },
//     { date: '23 Jan', revenue: 210 },
//     { date: '24 Jan', revenue: 90 },
//     { date: '25 Jan', revenue: 160 },
//     { date: '26 Jan', revenue: 200 },
//     { date: '27 Jan', revenue: 140 },
//     { date: '28 Jan', revenue: 170 },
//     { date: '29 Jan', revenue: 190 },
//     { date: '30 Jan', revenue: 130 },
//     { date: '31 Jan', revenue: 220 },
//   ];

//   // Find the maximum revenue for scaling
//   const maxRevenue = Math.max(...salesData.map(item => item.revenue));

//   // Container styles
//   const containerStyle = {
//     fontFamily: 'Arial, sans-serif',
//     maxWidth: '800px',
//     margin: '0 auto',
//       padding: '20px',
//   };

//   // Title styles
//   const titleStyle = {
//     textAlign: 'center',
//     marginBottom: '30px',
//     color: '#333',
//   };

//   // Chart styles
//   const chartStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     height: '300px',
//     borderBottom: '1px solid #ccc',
//     paddingBottom: '20px',
//   };

//   // Column container styles
//   const columnContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '30px',
//   };

//   // Column styles
//   const columnStyle = {
//     width: '20px',
//     backgroundColor: '#4CAF50',
//     borderRadius: '3px 3px 0 0',
//     transition: 'height 0.3s ease',
//     marginBottom: '5px',
//   };

//   // Date label styles
//   const dateStyle = {
//     fontSize: '12px',
//     color: '#666',
//     textAlign: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={titleStyle}>Sales Revenue</h2>
      
//       <div style={chartStyle}>
//         {salesData.map((item, index) => (
//           <div key={index} style={columnContainerStyle}>
//             <div
//               style={{
//                 ...columnStyle,
//                 height: `${(item.revenue / maxRevenue) * 100}%`
//               }}
//               title={`$${item.revenue}`}
//             ></div>
//             <div style={dateStyle}>{item.date}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SalesPIE;












import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const SalePIE = () => {
  // Ma'lumotlar
  const data = {
    labels: ['20 Jan', '21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan', '28 Jan', '29 Jan', '30 Jan', '31 Jan'],
    datasets: [
      {
        label: 'Sales Revenue ($)',
        data: [120, 180, 150, 210, 90, 160, 200, 140, 170, 190, 130, 220],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart sozlamalari
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Revenue',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `$${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return `$${value}`;
          }
        }
      }
    }
  };

  return (
    <div style={{ width: '90%', maxWidth: '800px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalePIE;