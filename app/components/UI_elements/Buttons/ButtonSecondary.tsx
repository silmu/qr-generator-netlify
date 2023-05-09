import React from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";

export default function ButtonSecondary({ children, click }: { children: string; click: () => void }) {
  return (
    <Button
      variant='contained'
      onClick={click}
      sx={{
        borderColor: purple[800],
        backgroundColor: purple[800],
        "&:hover": {
          backgroundColor: purple[900],
          borderColor: purple[900],
        },
      }}
    >
      {children}
    </Button>
  );
}
