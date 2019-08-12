import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import theme from "./theme";

hydrate(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
  () => {
    // [ReHydratation](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
    const jssStyles = document.getElementById("jss-ssr");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  },
);

if (module.hot) {
  module.hot.accept();
}
