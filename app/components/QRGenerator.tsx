import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import QRColorPick from "./QRColorPick";
import { ButtonDownload } from "./UI_elements";

export default function QRGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState<string | null>(null);
  const [inputColorDark, setInputColorDark] = useState("#000000");
  const [inputColorLight, setInputColorLight] = useState("#ffffff");
  const [imageFormat, setImageFormat] = useState<"image/png" | "image/jpeg" | "image/webp">("image/jpeg");

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
    handleGenerateQRCode();
  }, [imageFormat]);

  return (
    <div>
      <h2>Insert a link here:</h2>
      <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type='button' onClick={handleGenerateQRCode}>
        Generate QR Code
      </button>
      {qrCodeDataUrl && (
        <div>
          <QRColorPick
            qrCodeDataUrl={qrCodeDataUrl}
            inputColorDark={inputColorDark}
            inputColorLight={inputColorLight}
            handleColorPick={handleColorPick}
            handleFormatPick={handleFormatPick}
          />
          <ButtonDownload href={qrCodeDataUrl} name='qrcode' text='Download' />
        </div>
      )}
    </div>
  );
}
