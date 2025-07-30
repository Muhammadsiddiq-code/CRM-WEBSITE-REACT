import React from 'react';
import './SalesMap.css';

const SalesMap = () => {
  const salesData = {
    total: '$152K',
    countries: [
      { name: 'United States', percentage: 60, color: '#3498db' },
      { name: 'Spain', percentage: 20, color: '#2ecc71' },
      { name: 'United Kingdom', percentage: 10, color: '#f1c40f' },
      { name: 'Germany', percentage: 5, color: '#e74c3c' },
      { name: 'Canada', percentage: 5, color: '#9b59b6' }
    ]
  };

  return (
    <div className="sales-container">
      <h2 className="sales-title">Sales by Country</h2>
      
      <div className="total-sales-box">
        <span className="total-label">Total</span>
        <span className="total-amount">{salesData.total}</span>
      </div>
      
      <div className="countries-list">
        {salesData.countries.map((country, index) => (
          <div key={index} className="country-item">
            <span className="country-name">{country.name}</span>
            
            <div className="progress-container">
              <div 
                className="progress-bar"
                style={{
                  width: `${country.percentage}%`,
                  backgroundColor: country.color
                }}
              ></div>
            </div>
            
            <span className="percentage-value">{country.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesMap;