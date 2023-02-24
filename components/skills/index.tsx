import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import React from 'react';

export default function Skills() {
  const skills = [
    'C#',
    '.NET (Core)',
    'Entity Framework',
    'Angular Framework',
    'gRPC',
    'Ionic Framework',
    'TypeScript',
    'SQL',
    'Umbraco CMS',
    'Docker',
    'Kubernetes',
    'Azure'
  ];

  return (
    <div className="row">
      <div className="col">
        <Typography variant="h5" gutterBottom>Skills</Typography>
        {skills.map((p, index) => (<Chip key={index} className='me-2' label={p} />))}
      </div>
    </div>
  );
}