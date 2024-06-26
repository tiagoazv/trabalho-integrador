import React, { useEffect, useState } from 'react';
import {
    getTurma,
    //getTurmaById,
    createTurma,
    updateTurma,
    deleteTurma
} from '../services/turmaService';

import Modal from '../components/Modal';

const Turma = () => {
    const [turma, setTurma] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchTurmas()
    }, []);

    const fetchTurmas = async () => {
        try {
            const data = await getTurma();
            const options = data.map((turma) => ({
              value: turma.id,
              label: `Turma ${turma.id}`,
            }));
            setOptions(options);
            setTurma(data);
        } catch (error) {
            console.error('Erro ao buscar Turmas:', error);
        }
    };

    const handleCreateTurma = async (newTurma) => {
        try {
            await createTurma(newTurma);
            fetchTurmas()
        } catch (error) {
            console.error('Erro ao criar Turma: ', error);
        }
    };
    
    const handleUpdateTurma = async (id, updatedTurma) => {
        try {
            await updateTurma(id, updatedTurma);
            fetchTurmas()
        } catch (error) {
            console.error('Erro ao atualizar Turma:', error);
        }
    };

    const handleDeleteTurma = async (id) => {
        try {
            await deleteTurma(id);
            fetchTurmas()
        } catch (error) {
            console.error('Erro ao deletar Turma:', error);
        }
    };

    return (
    <div className="container mt-5">
      <h1 className="mb-4">Turma</h1>
      <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#turmaModal">
        <i className="fas fa-plus"></i>
      </button>
      <div className="row">
        {turma.map(turma => (
          <div className="col-md-4" key={turma.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Turma {turma.id} - {turma.professor}</h5>
                <p className="card-text">{turma.vagas} vagas</p>
                <p className="card-text">{turma.conteudo}</p>
                <p className="card-text">{turma.dia}-Feira</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal id="turmaModal" title="Turma" formType="turma" data={options} onCreate={handleCreateTurma} onUpdate={handleUpdateTurma} onDelete={handleDeleteTurma} />
    </div>
    
  );
};

export default Turma;
