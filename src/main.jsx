import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import AuthProviders from "./components/providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="lg:max-w-7xl md:mx-auto mx-2 ">
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </React.StrictMode>
  </div>
);
