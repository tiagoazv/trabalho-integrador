import axios from 'axios';

const API_URL = 'http://localhost:3000/aluno';

export const getAluno = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar Aluno:', error);
    throw error;
  }
};

export const getAlunoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar Aluno com ID ${id}:`, error);
    throw error;
  }
};

export const createAluno = async (Aluno) => {
  try {
    const response = await axios.post(API_URL, Aluno, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar Aluno:', error);
    throw error;
  }
};

export const updateAluno = async (id, Aluno) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, Aluno);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar Aluno com ID ${id}:`, error);
    throw error;
  }
};

export const deleteAluno = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar Aluno com ID ${id}:`, error);
    throw error;
  }
};
