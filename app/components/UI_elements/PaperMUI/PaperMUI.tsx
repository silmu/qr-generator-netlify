import * as React from 'react';
import { Paper } from '@mui/material';

export default function PaperMUI({ children }: { children: any }) {
  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      {children}
    </Paper>
  );
}
