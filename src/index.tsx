import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' instead of 'react-dom'
import App from "./App"; // Importing the App component
import "./styles.css";

// Create a root using createRoot
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Type assertion to HTMLElement
);

// Render the app using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
