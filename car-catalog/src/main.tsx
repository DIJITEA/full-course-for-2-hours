import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Router from "./components/Router";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient
const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
