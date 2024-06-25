import React, { useState } from 'react';
import Form from './Form';
import { consola } from 'consola';

const Modal = ({ id, title, formType, onCreate, onUpdate, onDelete, data }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    consola.info(`Changing ${id} with value ${value}`)
    const fieldName = id.split('_')[1]; 
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleCreate = async () => {
    console.log('Creating with:', formData);
    await onCreate(formData);
  };

  const handleUpdate = async () => {
    console.log('Updating with:', formData);
    await onUpdate(formData.id, formData);
  };

  const handleDelete = async () => {
    console.log('Deleting ID:', formData.id);
    await onDelete(formData.id);
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Form formType={formType} onChange={handleChange} data={data}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Excluir</button>
            <button type="button" className="btn btn-primary" onClick={handleUpdate} data-bs-dismiss="modal">Salvar</button>
            <button type="button" className="btn btn-success" onClick={handleCreate} data-bs-dismiss="modal">Criar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
