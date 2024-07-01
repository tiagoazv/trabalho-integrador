import React, { useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

Chart.register(...registerables);

const Dashboard = () => {
  const [professors, setProfessors] = useState([]);
  const [conteudos, setConteudos] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/professor').then((response) => setProfessors(response.data));
    axios.get('http://localhost:3000/conteudo').then((response) => setConteudos(response.data));
    axios.get('http://localhost:3000/turma').then((response) => setTurmas(response.data));
    axios.get('http://localhost:3000/nota').then((response) => setNotas(response.data));
  }, []);

  const conteudoData = {
    labels: conteudos.map((conteudo) => conteudo.nome),
    datasets: [
      {
        label: 'Aulas',
        data: conteudos.map((conteudo) => conteudo.qtaulasprevistas),
        backgroundColor: 'rgba(66, 135, 245, 0.8)'
      },
    ],
  };

  const turmaData = {
    labels: turmas.map((turma) => `${turma.dia} - ${turma.conteudo}`),
    datasets: [
      {
        label: 'Vagas por Turma',
        data: turmas.map((turma) => turma.vagas),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const aprovados = notas.filter(nota => nota.nota >= 6).length;
  const reprovados = notas.filter(nota => nota.nota < 6).length;

  const notaData = {
    labels: ['Aprovados', 'Reprovados'],
    datasets: [
      {
        label: 'Aprovações e Reprovações',
        data: [aprovados, reprovados],
        backgroundColor: [
          'rgba(75, 192, 192, 1)', 
          'rgba(255, 99, 132, 1)',
        ],
      },
    ],
  };

  const turmaPorProfessorMap = professors.reduce((acc, professor) => {
    acc[professor.nome] = { professor: professor.nome, turmas: 0 };
    return acc;
  }, {});


  turmas.forEach((turma) => {
    if (turmaPorProfessorMap[turma.professor]) {
      turmaPorProfessorMap[turma.professor].turmas += 1;
    } else {
      console.log(`Professor com nome ${turma.nomeprofessor} não encontrado no mapa`);
    }
  });

  const turmaPorProfessor = Object.values(turmaPorProfessorMap);

  const turmaProfessorData = {
    labels: turmaPorProfessor.map((item) => item.professor),
    datasets: [
      {
        label: 'Número de Turmas por Professor',
        data: turmaPorProfessor.map((item) => item.turmas),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value;
            }
          }
        }
      }
    }
  };

  return (
    <div className="container">
      <h1 className="my-3">Dashboard</h1>
      <div className="row mb-3">
            <div className="col-md-6">
                <h2>Conteúdo</h2>
                <Bar data={conteudoData} />
            </div>
            <div className="col-md-6">
                <h2>Turmas</h2>
                <Bar data={turmaData} />
            </div>
      </div>
      <div className="row mb-3">
      <div className="col-md-6 chart-container">
          <h2>Notas</h2>
          <Pie data={notaData} />
        </div>
        <div className="col-md-6">
          <h2>Professor</h2>
          <div className="chart-container">
            <Bar data={turmaProfessorData} options={options}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
