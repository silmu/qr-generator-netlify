import * as React from "react";
import { Paper } from "@mui/material";

export default function PaperMUI({ children }: { children: any }) {
  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        maxWidth: "200px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Paper>
  );
}
