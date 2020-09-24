import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Provider } from "react-redux";

import { appStore } from "./stores/appStore";
import { AppContainer } from "./containers/AppContainer";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#474747",
        main: "#474747",
        dark: "#474747",
        contrastText: "#fff",
      },
      secondary: {
        light: "#9f8d7e",
        main: "#87715E",
        dark: "#5e4f41",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={appStore}>
        <AppContainer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
