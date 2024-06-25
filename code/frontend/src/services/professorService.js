import axios from 'axios';

const API_URL = 'http://localhost:3000/professor';

export const getProfessor = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar Professor:', error);
    throw error;
  }
};

export const getProfessorById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar Professor com ID ${id}:`, error);
    throw error;
  }
};

export const createProfessor = async (Professor) => {
  try {
    const response = await axios.post(API_URL, Professor, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar Professor:', error);
    throw error;
  }
};

export const updateProfessor = async (id, Professor) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, Professor);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar Professor com ID ${id}:`, error);
    throw error;
  }
};

export const deleteProfessor = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar Professor com ID ${id}:`, error);
    throw error;
  }
};
