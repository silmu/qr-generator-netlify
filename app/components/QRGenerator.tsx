import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import QRColorPick from './QRColorPick';
import { ButtonDownload, ButtonSecondary } from './UI_elements';
import { Box, TextField } from '@mui/material';

export default function QRGenerator() {
  const [inputValue, setInputValue] = useState('https://qr-code-lab.netlify.app/');
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState<string>('https://qr-code-lab.netlify.app/');
  const [inputColorDark, setInputColorDark] = useState('#000000');
  const [inputColorLight, setInputColorLight] = useState('#ffffff');
  const [imageFormat, setImageFormat] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/jpeg');

  const handleGenerateQRCode = async () => {
    // Only generate QR if string was input
    if (inputValue) {
      const dataUrl = await QRCode.toDataURL(inputValue, {
        color: { dark: inputColorDark, light: inputColorLight },
        type: imageFormat,
      });
      setQRCodeDataUrl(dataUrl);
    }
  };

  const handleColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'dark') {
      setInputColorDark(e.target.value);
    } else {
      setInputColorLight(e.target.value);
    }
  };

  const handleFormatPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const format = e.target.value as 'image/png' | 'image/jpeg' | 'image/webp';
    setImageFormat(format);
  };

  useEffect(() => {
    handleGenerateQRCode();
  }, [imageFormat, inputColorDark, inputColorLight]);

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     flexDirection: 'column',
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //       width: '100%',
    //       justifyContent: 'center',
    //       '@media (max-width: 600px)': {
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       },
    //     }}
    //   >
    //     <TextField
    //       type='text'
    //       variant='outlined'
    //       label='Insert a link here'
    //       onChange={e => setInputValue(e.target.value)}
    //       sx={{ minWidth: '300px', '@media (max-width: 600px)': { minWidth: '100%', paddingBottom: '10px' } }}
    //     />
    //     <ButtonSecondary click={handleGenerateQRCode}>Generate QR Code</ButtonSecondary>
    //   </Box>

    //   <QRColorPick
    //     qrCodeDataUrl={qrCodeDataUrl}
    //     inputColorDark={inputColorDark}
    //     inputColorLight={inputColorLight}
    //     handleColorPick={handleColorPick}
    //     handleFormatPick={handleFormatPick}
    //   />
    //   <ButtonDownload href={qrCodeDataUrl} name='qrcode' text='Download' />
    // </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Input and Generate Button Row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '500px', // Limit the maximum width
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
          },
        }}
      >
        <TextField
          type='text'
          variant='outlined'
          label='Insert a link here'
          onChange={e => setInputValue(e.target.value)}
          sx={{
            flexGrow: 1,
            minWidth: '250px',
          }}
        />
        <ButtonSecondary click={handleGenerateQRCode}>Generate QR Code</ButtonSecondary>
      </Box>

      {/* QR Code and Color Picker Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Ensure stacking
          alignItems: 'center',
          marginBottom: '20px',
          width: '100%', // Ensure it takes the full width
        }}
      >
        {/* Color Picker */}
        <QRColorPick
          qrCodeDataUrl={qrCodeDataUrl}
          inputColorDark={inputColorDark}
          inputColorLight={inputColorLight}
          handleColorPick={handleColorPick}
          handleFormatPick={handleFormatPick}
        />
      </Box>

      {/* Download Button */}
      <ButtonDownload href={qrCodeDataUrl} name='qrcode' text='Download' />
    </Box>
  );
}
