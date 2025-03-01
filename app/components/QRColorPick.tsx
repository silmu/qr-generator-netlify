import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { PaperMUI } from './UI_elements';

interface QRColorPickProps {
  qrCodeDataUrl: string;
  inputColorDark: string;
  inputColorLight: string;
  handleColorPick: (arg1: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormatPick: (arg1: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QRColorPick({
  qrCodeDataUrl,
  inputColorDark,
  inputColorLight,
  handleColorPick,
  handleFormatPick,
}: QRColorPickProps) {
  return (
    <PaperMUI>
      <Box sx={{ marginRight: 2 }}>
        <Grid container spacing={3} sx={{ marginBottom: 1, marginTop: 1 }}>
          <Grid item xs={12} sm={6}>
            <Box>
              <input className='input-color' type='color' name='dark' value={inputColorDark} onChange={e => handleColorPick(e)} />
            </Box>
            <Typography variant='subtitle2' gutterBottom>
              Main Color
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <input className='input-color' type='color' name='light' value={inputColorLight} onChange={e => handleColorPick(e)} />
              <Typography variant='subtitle2' gutterBottom>
                Background Color
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ width: '100%' }}>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type='radio' name='format' value='image/jpeg' onChange={handleFormatPick} style={{ marginRight: '8px' }} />
                JPEG
              </label>
            </Grid>
            <Grid item>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type='radio' name='format' value='image/png' onChange={handleFormatPick} style={{ marginRight: '8px' }} />
                PNG
              </label>
            </Grid>
            <Grid item>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type='radio' name='format' value='image/webp' onChange={handleFormatPick} style={{ marginRight: '8px' }} />
                WEBP
              </label>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* QR Code Preview (Right on Desktop, Bottom on Mobile) */}
      <PaperMUI>
        <Box>{qrCodeDataUrl && <img src={qrCodeDataUrl} alt='QR Code' style={{ maxWidth: '100%', maxHeight: '300px' }} />}</Box>
      </PaperMUI>
    </PaperMUI>
  );
}
