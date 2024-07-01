import React, { useEffect, useState } from 'react';
import {
    getAluno,
    //getAlunoById,
    createAluno,
    updateAluno,
    deleteAluno
} from '../services/alunoService';

import Modal from '../components/Modal';
import { format, parseISO } from "date-fns";

const Aluno = () => {
    const [aluno, setAluno] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchAlunos()
    }, []);

    const fetchAlunos = async () => {
        try {
            const data = await getAluno();
            const options = data.map((aluno) => ({
              value: aluno.id,
              label: aluno.nome,
            }));
            setOptions(options);
            setAluno(data);
        } catch (error) {
            console.error('Erro ao buscar Aluno:', error);
        }
    };

    const handleCreateAluno = async (newAluno) => {
        try {
            await createAluno(newAluno);
            fetchAlunos()
        } catch (error) {
            console.error('Erro ao criar Aluno: ', error);
        }
    };
    
    const handleUpdateAluno = async (id, updatedAluno) => {
        try {
            await updateAluno(id, updatedAluno);
            fetchAlunos()
        } catch (error) {
            console.error('Erro ao atualizar Aluno:', error);
        }
    };

    const handleDeleteAluno = async (id) => {
        try {
            await deleteAluno(id);
            fetchAlunos()
        } catch (error) {
            console.error('Erro ao deletar Aluno:', error);
        }
    };

    return (
    <div className="container mt-5">
      <h1 className="mb-4">Aluno</h1>
      <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#alunoModal">
        <i className="fas fa-plus"></i>
      </button>
      <div className="container mt-5">
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Data de Nascimento</th>
                <th>Turma</th>
            </tr>
            </thead>
            <tbody>
            {aluno.map((aluno, index) => (
                <tr key={index}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.telefone}</td>
                    <td>{aluno.email}</td>
                    <td>{aluno.endereco}</td>
                    <td>{format(parseISO(aluno.datanasc), 'dd/MM/yyyy')}</td>
                    <td>{aluno.idturma}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
      <Modal id="alunoModal" title="Aluno" formType="aluno" data={options} onCreate={handleCreateAluno} onUpdate={handleUpdateAluno} onDelete={handleDeleteAluno} />
    </div>
    
  );
};

export default Aluno;
