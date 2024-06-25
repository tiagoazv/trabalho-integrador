import React, { useEffect, useState } from 'react';
import {
    getProfessor,
    //getProfessorById,
    createProfessor,
    updateProfessor,
    deleteProfessor
} from '../services/professorService';

import Modal from '../components/Modal';

const Professor = () => {
    const [professor, setProfessor] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchProfessores()
    }, []);

    const fetchProfessores = async () => {
        try {
            const data = await getProfessor();
            const options = data.map((professor) => ({
              value: professor.id,
              label: professor.nome,
            }));
            setOptions(options);
            setProfessor(data);
        } catch (error) {
            console.error('Erro ao buscar Professores:', error);
        }
    };

    const handleCreateProfessor = async (newProfessor) => {
        try {
            await createProfessor(newProfessor);
            fetchProfessores()
        } catch (error) {
            console.error('Erro ao criar Professor: ', error);
        }
    };
    
    const handleUpdateProfessor = async (id, updatedProfessor) => {
        try {
            await updateProfessor(id, updatedProfessor);
            fetchProfessores()
        } catch (error) {
            console.error('Erro ao atualizar Professor:', error);
        }
    };

    const handleDeleteProfessor = async (id) => {
        try {
            await deleteProfessor(id);
            fetchProfessores()
        } catch (error) {
            console.error('Erro ao deletar Professor:', error);
        }
    };

    return (
    <div className="container mt-5">
      <h1 className="mb-4">Professor</h1>
      <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#professorModal">
        <i className="fas fa-plus"></i>
      </button>
      <div className="row">
        {professor.map(professor => (
          <div className="col-md-4" key={professor.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{professor.nome}</h5>
                <p className="card-text">{professor.username}</p>
                <p className="card-text">{professor.telefone}</p>
                <p className="card-text">{professor.email}</p>
                <p className="card-text">{professor.endereco}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal id="professorModal" title="Professor" formType="professor" data={options} onCreate={handleCreateProfessor} onUpdate={handleUpdateProfessor} onDelete={handleDeleteProfessor} />
    </div>
    
  );
};

export default Professor;
