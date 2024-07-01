// components/Navbar.js
import React from 'react';
import logo from "../logo.png";
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isDarkMode, toggleMode, isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="115px" height="26px" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
          {isAuthenticated ? (
        <>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/aluno">Aluno</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/nota">Nota</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/conteudo">Conteúdo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/turma">Turma</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/professor">Professor</Link>
            </li>
            <li className="nav-item ms-auto">
              <div id="mode" className="nav-link custom-link" onClick={toggleMode}>
                🌔 {!isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
              </div>
            </li>
            <li className="nav-item ms-auto">
              <div className="nav-link custom-link" onClick={handleLogout}>Logout</div>
            </li>
            </>
            ) : (
              <Link className="nav-link custom-link" to="/login">Login</Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
