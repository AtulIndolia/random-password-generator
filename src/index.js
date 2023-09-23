import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
);