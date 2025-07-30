import React from 'react';
import { 
  Box,
  Typography,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';

const Ecommerce = () => {
  const theme = useTheme();
  
  const data = [
    { channel: 'Strategy', value: '$14,859.00' },
    { channel: 'Outsourcing', value: '$35,690.00' },
    { channel: 'Marketing', value: '$45,120.00' },
    { channel: 'Other', value: '$25,486.00' }
  ];

  const total = data.reduce((sum, item) => {
    return sum + parseFloat(item.value.replace(/[^0-9.-]+/g,""));
  }, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">Cost Breakdown</Typography>
        <Typography variant="body2" color="text.secondary">Based on selected period</Typography>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>TOP CHANNELS</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>VALUE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.channel}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ backgroundColor: theme.palette.grey[100] }}>
              <TableCell sx={{ fontWeight: 'bold' }}>TOTAL</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Ecommerce;