import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { LogoutProvider } from "./contexts/LogoutContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <LogoutProvider>
        <App />
        </LogoutProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
