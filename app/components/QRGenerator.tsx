import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import QRColorPick from "./QRColorPick";
import { ButtonDownload, ButtonSecondary } from "./UI_elements";
import { Box, TextField } from "@mui/material";

export default function QRGenerator() {
  const [inputValue, setInputValue] = useState("https://qr-code-lab.netlify.app/");
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState<string>("https://qr-code-lab.netlify.app/");
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      {/* <h2>Insert a link here:</h2> */}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <TextField
          type='text'
          variant='outlined'
          label='Insert a link here'
          onChange={e => setInputValue(e.target.value)}
          sx={{ minWidth: "300px" }}
        />
        <ButtonSecondary click={handleGenerateQRCode}>Generate QR Code</ButtonSecondary>
      </Box>

      <QRColorPick
        qrCodeDataUrl={qrCodeDataUrl}
        inputColorDark={inputColorDark}
        inputColorLight={inputColorLight}
        handleColorPick={handleColorPick}
        handleFormatPick={handleFormatPick}
      />
      <ButtonDownload href={qrCodeDataUrl} name='qrcode' text='Download' />
    </Box>
  );
}
