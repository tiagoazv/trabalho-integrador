class Nota {
  constructor(id, idaluno, idconteudo, nota, qtaulas, dataini, datafim) {
    this.id = id;
    this.idaluno = idaluno;
    this.idconteudo = idconteudo;
    this.nota = nota;
    this.qtaulas = qtaulas;
    this.dataini = dataini;
    this.datafim = datafim;
  }
}

module.exports = Nota;