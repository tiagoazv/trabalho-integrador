import React, {useState} from "react";
import CreatableSelect from 'react-select/creatable';
import Select from './Select'
import { consola } from 'consola';

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

const handleRegularSelectChange = (selectedOption, fieldName) => {
  consola.info(selectedOption.target.value)
  onChange({
      target: {
        id: fieldName,
        value: selectedOption ? selectedOption.target.value : '',
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

      {formType === "turma" && (
        <>
        <div className="mb-3">
          <label htmlFor="turma_nome" className="form-label">Selecione uma turma para editar</label>
            <CreatableSelect
              isClearable
              onChange={(selectedOption) => handleSelectChange(selectedOption, 'turma_nome')}
              options={data}
              id="turma_nome"
              className="form-control"
              value={selectedContent}
            />
          </div>
          <div className="mb-3">
            <input
              type="hidden"
              className="form-control"
              id="turma_id"
              value={selectedContent && !selectedContent.__isNew__ ? selectedContent.value : 0}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="turma_idprofessor" className="form-label">Professor</label>
            <Select formType="professor" title="Selecione o professor..." onChange={(e) => handleRegularSelectChange(e, 'turma_idprofessor')} id="turma_idprofessor" className="form-control"></Select>
          </div>
          <div className="mb-3">
            <label htmlFor="turma_idconteudo" className="form-label">Conteúdo atual</label>
            <Select formType="conteudo" title="Selecione o conteúdo..." onChange={(e) => handleRegularSelectChange(e, 'turma_idconteudo')} id="turma_idconteudo" className="form-control"></Select>
          </div>
          <div className="mb-3">
            <label htmlFor="turma_dia" className="form-label">Dia de aula</label>
            <select onChange={(e) => handleRegularSelectChange(e, 'turma_dia')} id="turma_dia" className="form-control">
              <option value="">Selecione o dia de aula...</option>
                <option key="Segunda" value="Segunda">Segunda</option>
                <option key="Terça" value="Terça">Terça</option>
                <option key="Quarta" value="Quarta">Quarta</option>
                <option key="Quinta" value="Quinta">Quinta</option>
                <option key="Sexta" value="Sexta">Sexta</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="turma_vagas" className="form-label">Vagas</label>
            <input type="number" className="form-control" id="turma_vagas" onChange={onChange} />
          </div>
        </>
      )}

{formType === "aluno" && (
        <>
        <div className="mb-3">
          <label htmlFor="aluno_nome" className="form-label">Selecione ou crie um aluno</label>
            <CreatableSelect
              isClearable
              onChange={(selectedOption) => handleSelectChange(selectedOption, 'aluno_nome')}
              options={data}
              id="aluno_nome"
              className="form-control"
              value={selectedContent}
            />
          </div>
          <div className="mb-3">
            <input
              type="hidden"
              className="form-control"
              id="aluno_id"
              value={selectedContent && !selectedContent.__isNew__ ? selectedContent.value : 0}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aluno_telefone" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="aluno_telefone" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="aluno_email" className="form-label">Email</label>
            <input type="email" className="form-control" id="aluno_email" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="aluno_endereco" className="form-label">Endereço</label>
            <input type="email" className="form-control" id="aluno_endereco" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="aluno_datanasc" className="form-label">Data de Nascimento</label>
            <input type="date" className="form-control" id="aluno_datanasc" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="aluno_idturma" className="form-label">Turma atual</label>
            <Select formType="turma" title="Selecione a turma..." onChange={(e) => handleRegularSelectChange(e, 'aluno_idturma')} id="aluno_idturma" className="form-control"></Select>
          </div>
        </>
      )}{formType === "nota" && (
        <>
        <div className="mb-3">
          <label htmlFor="nota_nome" className="form-label">Selecione ou crie um nota</label>
            <CreatableSelect
              isClearable
              onChange={(selectedOption) => handleSelectChange(selectedOption, 'nota_nome')}
              options={data}
              id="nota_nome"
              className="form-control"
              value={selectedContent}
            />
          </div>
          <div className="mb-3">
            <input
              type="hidden"
              className="form-control"
              id="nota_id"
              value={selectedContent && !selectedContent.__isNew__ ? selectedContent.value : 0}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nota_idaluno" className="form-label">Aluno</label>
            <Select formType="aluno" title="Selecione o aluno..." onChange={(e) => handleRegularSelectChange(e, 'nota_idaluno')} id="nota_idaluno" className="form-control"></Select>
          </div>
          <div className="mb-3">
            <label htmlFor="nota_idconteudo" className="form-label">Conteúdo</label>
            <Select formType="conteudo" title="Selecione o conteudo..." onChange={(e) => handleRegularSelectChange(e, 'nota_idconteudo')} id="nota_idconteudo" className="form-control"></Select>
          </div>
          <div className="mb-3">
            <label htmlFor="nota_nota" className="form-label">Nota</label>
            <input type="number" className="form-control" id="nota_nota" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="nota_qtaulas" className="form-label">Quantia de Aulas</label>
            <input type="number" className="form-control" id="nota_qtaulas" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="nota_dataini" className="form-label">Data de Início</label>
            <input type="date" className="form-control" id="nota_dataini" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="nota_datafim" className="form-label">Data de Fim</label>
            <input type="date" className="form-control" id="nota_datafim" onChange={onChange} />
          </div>

          
        </>
      )}
    </form>
  );
};

export default Form;
