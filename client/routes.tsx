import React from "react";
import ReactDOM from "react-dom/client";
import { PublicRouter } from "./public/layouts";

ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <PublicRouter />
    </React.StrictMode>
);