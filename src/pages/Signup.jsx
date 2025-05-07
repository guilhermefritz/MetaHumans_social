// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para registrar o usuário (ex: salvar em um banco de dados)
    // No momento, vamos simular um cadastro e redirecionar para a página de login
    if (username && email && password) {
      alert("Conta criada com sucesso!");
      navigate("/login"); // Redireciona para a página de login
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSignup}>
        <h2>Criar Conta</h2>
        <div>
          <input
            type="text"
            placeholder="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default Signup;
