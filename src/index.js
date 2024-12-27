import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Normalize } from "styled-normalize";
import store from "./utils/redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
  <ThemeProvider theme={theme}>
   <StrictMode>
    <GlobalStyle />
    <Normalize />
    <App />
   </StrictMode>
  </ThemeProvider>
 </Provider>
);

reportWebVitals();
