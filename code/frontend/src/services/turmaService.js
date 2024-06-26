import axios from 'axios';

const API_URL = 'http://localhost:3000/turma';

export const getTurma = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar Turma:', error);
    throw error;
  }
};

export const getTurmaById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar Turma com ID ${id}:`, error);
    throw error;
  }
};

export const createTurma = async (Turma) => {
  try {
    const response = await axios.post(API_URL, Turma, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar Turma:', error);
    throw error;
  }
};

export const updateTurma = async (id, Turma) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, Turma);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar Turma com ID ${id}:`, error);
    throw error;
  }
};

export const deleteTurma = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar Turma com ID ${id}:`, error);
    throw error;
  }
};
