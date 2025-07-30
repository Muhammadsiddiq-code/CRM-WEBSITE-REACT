import React from 'react';

const TopSellings = () => {
  const products = [
    {
      category: 'Healthcare',
      name: 'Erbology in Accessories',
      sales: '13,153 in sales',
      rank: '#1'
    },
    {
      category: 'Makeup Lancome',
      name: 'Rouge in Accessories',
      sales: '10,300 in sales',
      rank: '#2'
    },
    {
      category: 'Lounge Puff',
      name: 'Fabric Slipper in Accessories',
      sales: '5,300 in sales',
      rank: '#3'
    },
    {
      category: 'Skincare',
      name: 'Necessaire in Accessories',
      sales: '1,203 in sales',
      rank: '#4'
    },
    {
      category: 'Skincare Soja',
      name: 'CO in Accessories',
      sales: '254 in sales',
      rank: '#5'
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Top Selling Products</h2>
      
      <div style={styles.productsContainer}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <div style={styles.productInfo}>
              <div style={styles.productCategory}>{product.category}</div>
              <div style={styles.productName}>{product.name}</div>
              <div style={styles.productSales}>{product.sales}</div>
            </div>
            <div style={styles.productRank}>{product.rank}</div>
          </div>
        ))}
      </div>
      
      <div style={styles.seeAll}>See All →</div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333'
  },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  productCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#f0f0f0',
      transform: 'translateY(-2px)'
    }
  },
  productInfo: {
    flex: 1
  },
  productCategory: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '5px'
  },
  productName: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '5px',
    color: '#333'
  },
  productSales: {
    fontSize: '14px',
    color: '#888'
  },
  productRank: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4CAF50',
    marginLeft: '15px'
  },
  seeAll: {
    marginTop: '20px',
    textAlign: 'left',
    color: '#4CAF50',
    fontWeight: '500',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};

export default TopSellings;