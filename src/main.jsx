// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Para os estilos globais
import App from "./App"; // Importando o componente principal
import { BrowserRouter as Router } from "react-router-dom"; // Para as rotas

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
