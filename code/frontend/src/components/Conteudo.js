import React, { useEffect, useState } from 'react';
import {
    getConteudo,
    //getConteudoById,
    createConteudo,
    updateConteudo,
    deleteConteudo
} from '../services/conteudoService';

import Modal from '../components/Modal';

const Conteudo = () => {
    const [conteudo, setConteudo] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchConteudos()
    }, []);

    const fetchConteudos = async () => {
        try {
            const data = await getConteudo();
            const options = data.map((conteudo) => ({
              value: conteudo.id,
              label: conteudo.nome,
            }));
            setOptions(options);
            setConteudo(data);
        } catch (error) {
            console.error('Erro ao buscar CCRs:', error);
        }
    };

    const handleCreateConteudo = async (newConteudo) => {
        try {
            await createConteudo(newConteudo);
            fetchConteudos()
        } catch (error) {
            console.error('Erro ao criar Conteudo: ', error);
        }
    };
    
    const handleUpdateConteudo = async (id, updatedConteudo) => {
        try {
            await updateConteudo(id, updatedConteudo);
            fetchConteudos()
        } catch (error) {
            console.error('Erro ao atualizar CCR:', error);
        }
    };

    const handleDeleteConteudo = async (id) => {
        try {
            await deleteConteudo(id);
            fetchConteudos()
        } catch (error) {
            console.error('Erro ao deletar Conteudo:', error);
        }
    };

    return (
    <div className="container mt-5">
      <h1 className="mb-4">Conteúdos</h1>
      <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#conteudoModal">
        <i className="fas fa-plus"></i>
      </button>
      <div className="row">
        {conteudo.map(conteudo => (
          <div className="col-md-4" key={conteudo.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{conteudo.nome}</h5>
                <p className="card-text"><span>Aulas previstas:</span> {conteudo.qtaulasprevistas}</p>
                <p className="card-text">{conteudo.descr}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal id="conteudoModal" title="Conteudo" formType="conteudo" data={options} onCreate={handleCreateConteudo} onUpdate={handleUpdateConteudo} onDelete={handleDeleteConteudo} />
    </div>
    
  );
};

export default Conteudo;
