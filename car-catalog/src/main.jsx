import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import Home from "./components/screens/home/Home.jsx";
import Router from "./components/ui/Router";
import AuthProvider from "./providers/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
