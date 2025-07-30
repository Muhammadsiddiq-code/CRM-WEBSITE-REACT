import React from 'react';

const Chart2 = () => {
  const socialMediaPlatforms = [
    { name: 'Linkedin', icon: '🔗' },
    { name: 'Instagram', icon: '📷' },
    { name: 'Facebook', icon: '👍' }
  ];

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '300px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        marginTop: '0',
        marginBottom: '20px',
        color: '#333',
        fontSize: '20px',
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px'
      }}>
        Social Media Sources
      </h2>
      
      <ul style={{
        listStyle: 'none',
        padding: '0',
        margin: '0'
      }}>
        {socialMediaPlatforms.map((platform, index) => (
          <li key={index} style={{
            padding: '12px 15px',
            marginBottom: '8px',
            backgroundColor: 'white',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            ':hover': {
              transform: 'translateX(5px)'
            }
          }}>
            <span style={{ fontSize: '20px' }}>{platform.icon}</span>
            <span style={{ fontSize: '16px' }}>{platform.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chart2;