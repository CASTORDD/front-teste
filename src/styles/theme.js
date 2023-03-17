import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0078b7",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  spacing: [0, 4, 8, 16, 24, 32, 64],
  typography: {
    fontFamily: lato.style.fontFamily,
    h1: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 900,
      fontSize: "5.6rem",
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 900,
      fontSize: "4.8rem",
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 900,
      fontSize: "4.0rem",
    },
    h4: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: "3.2rem",
    },
    h5: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: "2.4rem",
    },
    h6: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.6rem",
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.6rem",
    },
  },
});

export default theme;
