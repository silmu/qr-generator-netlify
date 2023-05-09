import React, { useState, useEffect } from "react";

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
    <>
      <div>
        <img src={qrCodeDataUrl} alt='QR code' />
      </div>
      <div>
        <input type='color' name='dark' value={inputColorDark} onChange={e => handleColorPick(e)}></input>
        <input type='color' name='light' value={inputColorLight} onChange={e => handleColorPick(e)}></input>
      </div>
      <div>
        <label>
          <input type='radio' name='format' value='image/jpeg' onChange={e => handleFormatPick(e)} />
          jpeg
        </label>
        <label>
          <input type='radio' name='format' value='image/png' onChange={e => handleFormatPick(e)} />
          png
        </label>
        <label>
          <input type='radio' name='format' value='image/webp' onChange={e => handleFormatPick(e)} />
          webp
        </label>
      </div>
    </>
  );
}
