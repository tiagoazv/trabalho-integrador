import React from 'react';

const Container = ({ cursos, ccrs }) => {
  return (
    <div>
      <div className="container mt-5">
        <h1>Cursos</h1>
        <div id="cursosList" className="row mt-3">
          {Array.isArray(cursos) ? (
            cursos.map(curso => (
              <div key={curso.id} className="col-5 mb-3">
                <h3>{curso.nome}</h3>
                <h4>Descrição</h4>
                <p>{curso.descricao}</p>
                <h4>ID Curso</h4>
                <p>{curso.id}</p>
                <h4>ID Campus</h4>
                <p>{curso.idcampus}</p>
                <h4>Turno</h4>
                <p>{curso.turno === 1 ? "Vespertino" : "Noturno"}</p>
              </div>
            ))
          ) : (
            <p>Nenhum curso encontrado</p>
          )}
        </div>
      </div>
      <div className="container mt-5">
        <h1>Ccrs</h1>
        <div id="ccrsList" className="row mt-3">
          {Array.isArray(ccrs) ? (
            ccrs.map(ccr => (
              <div key={ccr.id} className="col-5 mb-3">
                <h3>{ccr.nome}</h3>
                <h4>{ccr.id}</h4>
                <h4>Descrição</h4>
                <p>{ccr.descricao}</p>
                <h4>ID Curso</h4>
                <p>{ccr.idcurso}</p>
              </div>
            ))
          ) : (
            <p>Nenhum CCR encontrado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
