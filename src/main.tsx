// Imports

import "./utils/css/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";



// Root

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);