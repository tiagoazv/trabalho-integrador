// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aluno from './components/Aluno';
import Conteudo from './components/Conteudo';
import Nota from './components/Nota';
import Professor from './components/Professor';
import Turma from './components/Turma';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Navbar
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
        isAuthenticated={isAuthenticated}
        onLogout={setIsAuthenticated}
      />
      <Routes>
        <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
        <Route
          path="/aluno"
          element={isAuthenticated ? <Aluno /> : <Navigate to="/login" />}
        />
        <Route
          path="/nota"
          element={isAuthenticated ? <Nota /> : <Navigate to="/login" />}
        />
        <Route
          path="/conteudo"
          element={isAuthenticated ? <Conteudo /> : <Navigate to="/login" />}
        />
        <Route
          path="/turma"
          element={isAuthenticated ? <Turma /> : <Navigate to="/login" />}
        />
        <Route
          path="/professor"
          element={isAuthenticated ? <Professor /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
