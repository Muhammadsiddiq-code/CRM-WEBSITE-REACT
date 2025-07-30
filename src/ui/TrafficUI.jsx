import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const data = [
  { label: 'HTML', value: 75 },
  { label: 'CSS', value: 67 },
  { label: 'JavaScript', value: 55 },
  { label: 'React', value: 60 },
  { label: 'Node.js', value: 63 },
  { label: 'MongoDB', value: 63 },
  { label: 'Git', value: 70 },
];

const TrafficUI = () => {
  return (
    <Box width="100%" maxWidth={500} mx="auto">
      {data.map((item, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body2" mb={0.5}>
            {item.label}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              height: 15,
              borderRadius: 2,
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#6c63ff',
              },
              backgroundColor: '#f0f1f7',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default TrafficUI;
