import "react-perfect-scrollbar/dist/css/styles.css";

import GlobalStyles from "./components/GlobalStyles";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import theme from "./theme";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
