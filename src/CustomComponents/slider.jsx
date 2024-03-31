// SliderSizes.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({ defaultValue, min, max, onChange }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={defaultValue}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={onChange}
      />
    </Box>
  );
}
