import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./i18n";
import { AuthProvider } from "./useAuth";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
