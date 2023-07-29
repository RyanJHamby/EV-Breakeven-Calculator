import React from "react";
import "./style/App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}
