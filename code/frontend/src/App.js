import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aluno from './components/Aluno';
import Conteudo from './components/Conteudo';
import Nota from './components/Nota';
import Professor from './components/Professor';
import Turma from './components/Turma';
import Home from './components/Home';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/aluno" element={<Aluno />} />
        <Route path="/nota" element={<Nota />} />
        <Route path="/conteudo" element={<Conteudo />} />
        <Route path="/turma" element={<Turma />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
  
      
    </div>
  );
}

export default App;
