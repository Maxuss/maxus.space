import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle, ThemeProvider} from "@react95/core";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
          <GlobalStyle />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
