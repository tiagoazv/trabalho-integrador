import React, { useEffect, useState } from 'react';
import {
    getNota,
    //getNotaById,
    createNota,
    updateNota,
    deleteNota
} from '../services/notaService';

import Modal from '../components/Modal';
import { format, parseISO } from "date-fns";

const Nota = () => {
    const [nota, setNota] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchNotas()
    }, []);

    const fetchNotas = async () => {
        try {
            const data = await getNota();
            const options = data.map((nota) => ({
              value: nota.id,
              label: `${nota.aluno} - ${nota.conteudo}: ${nota.nota}`,
            }));
            setOptions(options);
            setNota(data);
        } catch (error) {
            console.error('Erro ao buscar Nota:', error);
        }
    };

    const handleCreateNota = async (newNota) => {
        try {
            await createNota(newNota);
            fetchNotas()
        } catch (error) {
            console.error('Erro ao criar Nota: ', error);
        }
    };
    
    const handleUpdateNota = async (id, updatedNota) => {
        try {
            await updateNota(id, updatedNota);
            fetchNotas()
        } catch (error) {
            console.error('Erro ao atualizar Nota:', error);
        }
    };

    const handleDeleteNota = async (id) => {
        try {
            await deleteNota(id);
            fetchNotas()
        } catch (error) {
            console.error('Erro ao deletar Nota:', error);
        }
    };

    return (
    <div className="container mt-5">
      <h1 className="mb-4">Nota</h1>
      <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#notaModal">
        <i className="fas fa-plus"></i>
      </button>
      <div className="container mt-5">
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Aluno</th>
                <th>Conteudo</th>
                <th>Nota</th>
                <th>Qt. Aulas</th>
                <th>Data de Início</th>
                <th>Data de Fim</th>
            </tr>
            </thead>
            <tbody>
            {nota.map((nota, index) => (
                <tr key={index}>
                    <td>{nota.aluno}</td>
                    <td>{nota.conteudo}</td>
                    <td>{nota.nota}</td>
                    <td>{nota.qtaulas}</td>
                    <td>{format(parseISO(nota.dataini), 'dd/MM/yyyy')}</td>
                    <td>{format(parseISO(nota.datafim), 'dd/MM/yyyy')}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
      <Modal id="notaModal" title="Nota" formType="nota" data={options} onCreate={handleCreateNota} onUpdate={handleUpdateNota} onDelete={handleDeleteNota} />
    </div>
    
  );
};

export default Nota;
