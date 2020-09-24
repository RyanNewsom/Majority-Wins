import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import { appStore } from "./stores/appStore";
import { AppContainer } from "./containers/AppContainer";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#C7E3CC",
        main: "#54A67E",
        dark: "#0C2D34",
        contrastText: "#fff",
      },
      secondary: {
        light: "#F5C522",
        main: "#EA8C27",
        dark: "#EA8C27",
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
