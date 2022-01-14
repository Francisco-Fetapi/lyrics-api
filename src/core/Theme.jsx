import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";

export default function Theme({ children }) {
  const theme = createMuiTheme({
    props: {
      // backgroundLogin:'#F0F2F5'
    },
    palette: {
      secondary: {
        light: "#81c784",
        main: "#4caf50",
        dark: "#388e3c",
        contrastText: "rgba(247, 247, 247, 0.939)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
