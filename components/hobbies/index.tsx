import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import React from 'react';

export default function Hobbies() {
  const hobbies = [
    'Reizen',
    'Fotografie',
    'Videografie',
    'Karten',
    'FPV Drones',
    'Gamen',
    'Simracen'
  ];

  return (
    <div className="row">
      <div className="col">
        <Typography variant="h5" gutterBottom>Hobby's</Typography>
        {hobbies.map((p, index) => (<Chip key={index} className='me-2' label={p} />))}
      </div>
    </div>
  );
}