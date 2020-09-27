import { createMuiTheme } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "#2C2C2C",
      default: "#FFFFFF",
      paper: "#3A3E46",
    },
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#fcb415",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#232831",
    },
  },
  shadows,
  typography,
});

export default theme;
