import React from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";

interface ButtonDownloadProps {
  href: string;
  name: string;
  text: string;
}

export default function ButtonDownload({ href, name, text }: ButtonDownloadProps) {
  const ColorButtonMUI = styled(Button)<ButtonProps>(({ theme }) => ({
    color: purple[500],
    borderColor: purple[500],
    "&:hover": {
      backgroundColor: purple[50],
      color: purple[700],
      borderColor: purple[700],
    },
  }));

  return (
    <ColorButtonMUI variant='outlined'>
      <a href={href} download={name} className={"styled_link"}>
        {text}
      </a>
    </ColorButtonMUI>
  );
}
