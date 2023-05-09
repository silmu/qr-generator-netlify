import React, { useState, useEffect } from "react";
import { Paper, Grid } from "@mui/material";
import { PaperMUI } from "./UI_elements";

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
      <Paper elevation={3} sx={{ p: 2, width: "fit-content" }}>
        <img src={qrCodeDataUrl} alt='QR code' />
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: 0 }}>
        <Grid item xs={6}>
          <label htmlFor='dark'>Main color</label>
          <div>
            <input
              className='input-color'
              type='color'
              name='dark'
              value={inputColorDark}
              onChange={e => handleColorPick(e)}
            ></input>
          </div>
        </Grid>

        <Grid item xs={6}>
          <label htmlFor='dark'>Background color</label>
          <div>
            <input
              className='input-color'
              type='color'
              name='light'
              value={inputColorLight}
              onChange={e => handleColorPick(e)}
            ></input>
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 0, marginBottom: 2 }}>
        <Grid item xs={4}>
          <label>
            <input type='radio' name='format' value='image/jpeg' onChange={e => handleFormatPick(e)} />
            jpeg
          </label>
        </Grid>
        <Grid item xs={4}>
          <label>
            <input type='radio' name='format' value='image/png' onChange={e => handleFormatPick(e)} />
            png
          </label>
        </Grid>
        <Grid item xs={4}>
          <label>
            <input type='radio' name='format' value='image/webp' onChange={e => handleFormatPick(e)} />
            webp
          </label>
        </Grid>
      </Grid>
    </PaperMUI>
  );
}
