// import React from 'react';
// import { CgDanger } from 'react-icons/cg';

// const Table = () => {
//   const data = [
//     { country: 'United States', value: '31,200', seo: '40%' },
//     { country: 'United Kingdom', value: '12,700', seo: '47%' },
//     { country: 'Russia', value: '10,360', seo: '65%' },
//     { country: 'Canada', value: '5,749', seo: '23%' },
//     { country: 'Germany', value: '2,932', seo: '4%' },
//     { country: 'Spain', value: '200', seo: '56%' },
//   ];

//   return (
//     <div className="visits-by-country" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: "0 55px" }}>
//       <h2>Visits by Country      <CgDanger /></h2>
      
//       <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//         <thead>
//           <tr style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>
//             <th style={{ padding: '8px' }}>COUNTRY</th>
//             <th style={{ padding: '8px' }}>VALUE</th>
//             <th style={{ padding: '8px' }}>SEO</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
//               <td style={{ padding: '8px' }}>{row.country}</td>
//               <td style={{ padding: '8px' }}>{row.value}</td>
//               <td style={{ padding: '8px' }}>{row.seo}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div style={{ marginTop: '10px', textAlign: 'right' }}>
//         <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>
//           See more →
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Table;





















import React from 'react';
import { CgDanger } from 'react-icons/cg';

const Table = () => {
  const data = [
    { country: 'United States', value: '31,200', seo: '40%' },
    { country: 'United Kingdom', value: '12,700', seo: '47%' },
    { country: 'Russia', value: '10,360', seo: '65%' },
    { country: 'Canada', value: '5,749', seo: '23%' },
    { country: 'Germany', value: '2,932', seo: '4%' },
    { country: 'Spain', value: '200', seo: '56%' },
  ];

  return (
    <div className="visits-by-country" style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: "30px 55px 5px  55px",
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>
      <h2 style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '10px',
        color: '#333',
        marginBottom: '5px'
      }}>
        Visits by Country
        <CgDanger style={{ 
          color: '#ff6b6b', 
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Visits information by country"
        />
      </h2>
      <p style={{ 
        color: '#666', 
        fontSize: '14px',
        marginTop: '0',
        marginBottom: '20px'
      }}>
        Number of visits and SEO percentage by country
      </p>
      
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginTop: '20px',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ 
            borderBottom: '2px solid #eee', 
            textAlign: 'left',
            color: '#555'
          }}>
            <th style={{ padding: '12px 8px', fontWeight: '600' }}>COUNTRY</th>
            <th style={{ padding: '12px 8px', fontWeight: '600' }}>VALUE</th>
            <th style={{ padding: '12px 8px', fontWeight: '600' }}>SEO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ 
              borderBottom: '1px solid #eee',
              transition: 'background 0.2s',
              ':hover': { backgroundColor: '#f9f9f9' }
            }}>
              <td style={{ padding: '12px 8px', color: '#333' }}>{row.country}</td>
              <td style={{ padding: '12px 8px', color: '#333' }}>{row.value}</td>
              <td style={{ 
                padding: '12px 8px', 
                color: parseInt(row.seo) > 50 ? '#2ecc71' : '#e74c3c',
                fontWeight: parseInt(row.seo) > 50 ? '600' : 'normal'
              }}>
                {row.seo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ 
        marginTop: '20px', 
        textAlign: 'left',
        paddingBottom: '20px'
      }}>
        <a href="#" style={{ 
          color: '#3498db', 
          textDecoration: 'none',
          fontWeight: '500',
          display: 'inline-flex',
          alignItems: 'center',
          textAlign: 'right',
          gap: '5px',
          transition: 'color 0.2s',
          ':hover': { color: '#2980b9' }
        }}>
          See more
          <span style={{ fontSize: '18px' }}>→</span>
        </a>
      </div>
    </div>
  );
};

export default Table;