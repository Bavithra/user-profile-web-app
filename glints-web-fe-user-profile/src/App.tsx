import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle, { AppContainer, PageContainer } from "./App.styles";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <PageContainer>
          <Router />
        </PageContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
