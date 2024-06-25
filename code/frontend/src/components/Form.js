import React, {useState} from "react";
import CreatableSelect from 'react-select/creatable';
//import { consola } from 'consola';

const Form = ({ formType, onChange, data }) => {
const [selectedContent, setSelectedContent] = useState(null);

const handleSelectChange = (selectedOption, fieldName) => {
  setSelectedContent(selectedOption);
  onChange({
      target: {
        id: fieldName,
        value: selectedOption ? selectedOption.label : ' ',
      },
  });

  const fieldId = fieldName.split('_')[0]; 
  onChange({
    target: {
      id: `${fieldId}_id`,
      value: !selectedOption?.__isNew__ ? selectedOption?.value : 0,
    },
  });
};

  return (
    <form>
      {formType === "conteudo" && (
        <>
        
          
        <div className="mb-3">
          <label htmlFor="conteudo_nome" className="form-label">Selecione ou crie um conteúdo</label>
            <CreatableSelect
              isClearable
              onChange={(selectedOption) => handleSelectChange(selectedOption, 'conteudo_nome')}
              options={data}
              id="conteudo_nome"
              className="form-control"
              value={selectedContent}
            />
          </div>
          <div className="mb-3">
            <input
              type="hidden"
              className="form-control"
              id="conteudo_id"
              value={selectedContent && !selectedContent.__isNew__ ? selectedContent.value : 0}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="conteudo_qtaulasprevistas" className="form-label">Quantia de Aulas Previstas</label>
            <input type="number" className="form-control" id="conteudo_qtaulasprevistas" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="conteudo_descricao" className="form-label">Descrição</label>
            <textarea rows="7" className="form-control" id="conteudo_descr" placeholder="Descrição..." onChange={onChange} />
          </div>
        </>
      )}
      {formType === "professor" && (
        <>
        
          
        <div className="mb-3">
          <label htmlFor="professor_nome" className="form-label">Selecione ou crie um professor</label>
            <CreatableSelect
              isClearable
              onChange={(selectedOption) => handleSelectChange(selectedOption, 'professor_nome')}
              options={data}
              id="professor_nome"
              className="form-control"
              value={selectedContent}
            />
          </div>
          <div className="mb-3">
            <input
              type="hidden"
              className="form-control"
              id="professor_id"
              value={selectedContent && !selectedContent.__isNew__ ? selectedContent.value : 0}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="professor_telefone" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="professor_telefone" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="professor_email" className="form-label">Email</label>
            <input type="email" className="form-control" id="professor_email" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="professor_endereco" className="form-label">Endereço</label>
            <input type="email" className="form-control" id="professor_endereco" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="professor_username" className="form-label">Username</label>
            <input type="text" className="form-control" id="professor_username" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="professor_senha" className="form-label">Senha</label>
            <input type="password" className="form-control" id="professor_senha" onChange={onChange} />
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
