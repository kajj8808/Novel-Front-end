import React from "react";

import UserContextProvider from "context"

import GlobalStyle from "./GloabalStyles"
import { ThemeProvider } from "styled-components";
import colorTheme from "./theme";

import Router from "./Router";

function App(){ 
  return(
    <UserContextProvider>
      <ThemeProvider theme={colorTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </UserContextProvider>
  )
}


export default App;