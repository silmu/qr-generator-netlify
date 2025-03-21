import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxMUI({ children, maxWidth }: { children: any; maxWidth: string }) {
  return (
    <Box
      sx={{
        p: 1,
        maxWidth: maxWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}
