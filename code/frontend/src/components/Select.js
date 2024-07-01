import React, { useState, useEffect } from 'react';
import {getTurma} from '../services/turmaService';
import {getProfessor} from '../services/professorService';
import {getConteudo} from '../services/conteudoService';
import {getAluno} from '../services/alunoService';
const Select = ({formType, title, onChange, id, className}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          let data = [];
          if (formType === "professor") {
            data = await getProfessor();
          } else if (formType === "conteudo") {
            data = await getConteudo();
          } else if (formType === "turma") {
            data = await getTurma();
          } else if (formType === "aluno") {
            data = await getAluno();
          }
          setOptions(data);
        } catch (error) {
          console.error(`Erro ao buscar os dados para ${formType}:`, error);
        }
      };
  
      fetchData();
    }, [formType]);

  return (
    <select onChange={onChange} id={id} className={className}>
      <option value="">{title}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.nome || option.id}
        </option>
      ))}
    </select>
  );
};

export default Select;