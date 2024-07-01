import axios from 'axios';

const API_URL = 'http://localhost:3000/nota';

export const getNota = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar Nota:', error);
    throw error;
  }
};

export const getNotaById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar Nota com ID ${id}:`, error);
    throw error;
  }
};

export const createNota = async (Nota) => {
  try {
    const response = await axios.post(API_URL, Nota, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar Nota:', error);
    throw error;
  }
};

export const updateNota = async (id, Nota) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, Nota);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar Nota com ID ${id}:`, error);
    throw error;
  }
};

export const deleteNota = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar Nota com ID ${id}:`, error);
    throw error;
  }
};
