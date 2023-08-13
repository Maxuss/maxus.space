import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyle, ThemeProvider} from "@react95/core";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={"storm"}>
          <GlobalStyle />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
