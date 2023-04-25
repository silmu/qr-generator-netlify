import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState<string | null>(null);
  const [inputColorDark, setInputColorDark] = useState("#000");
  const [inputColorLight, setInputColorLight] = useState("#ffffff");
  const [imageFormat, setImageFormat] = useState<"image/png" | "image/jpeg" | "image/webp">("image/jpeg");

  const handleGenerateQRCode = async () => {
    const dataUrl = await QRCode.toDataURL(inputValue, {
      color: { dark: inputColorDark, light: inputColorLight },
      type: imageFormat,
    });
    setQRCodeDataUrl(dataUrl);
  };

  const handleColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "dark") {
      setInputColorDark(e.target.value);
    } else {
      setInputColorLight(e.target.value);
    }
    handleGenerateQRCode();
  };

  const handleFormatPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const format = e.target.value as "image/png" | "image/jpeg" | "image/webp";
    console.log(format);
    setImageFormat(format);
    handleGenerateQRCode();
  };

  useEffect(() => {
    // handleGenerateQRCode();
  }, []);

  return (
    <div>
      <h2>Insert a link here:</h2>
      <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type='button' onClick={handleGenerateQRCode}>
        Generate QR Code
      </button>
      {qrCodeDataUrl && (
        <div>
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
          <div>
            <button>
              <a href={qrCodeDataUrl} download='qrcode'>
                Download
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
