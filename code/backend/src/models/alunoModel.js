class Aluno {
  constructor(id, nome, telefone, email, endereco, datanasc, idturma) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
    this.datanasc = datanasc;
    this.idturma = idturma;
  }
}

module.exports = Aluno;