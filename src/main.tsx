import ReactDOM from 'react-dom/client'
import {GlobalStyle, ThemeProvider} from "@react95/core";
import App from "./App.tsx";

export * from "./util/util.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
      <ThemeProvider theme={"storm"}>
          <GlobalStyle />
          <App />
      </ThemeProvider>
  </>,
)
