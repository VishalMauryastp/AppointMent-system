import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DoctorProvider } from "./context/DoctorProvider.jsx";
import { LoginProvider } from "./context/LoginProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <DoctorProvider>
        <App />
      </DoctorProvider>
    </LoginProvider>
  </React.StrictMode>
);
