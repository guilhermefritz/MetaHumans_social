// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Importando a página de cadastro
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Página de Login será a página inicial */}
        <Route path="/" element={<Login />} />

        {/* Página de Cadastro */}
        <Route path="/signup" element={<Signup />} />

        {/* A página Home só será acessível após o login */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
