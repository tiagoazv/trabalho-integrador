import axios from 'axios';

const API_URL = 'http://localhost:3000/conteudo';

export const getConteudo = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar Conteudo:', error);
    throw error;
  }
};

export const getConteudoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar conteudo com ID ${id}:`, error);
    throw error;
  }
};

export const createConteudo = async (conteudo) => {
  try {
    const response = await axios.post(API_URL, conteudo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar conteudo:', error);
    throw error;
  }
};

export const updateConteudo = async (id, conteudo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, conteudo);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar conteudo com ID ${id}:`, error);
    throw error;
  }
};

export const deleteConteudo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar conteudo com ID ${id}:`, error);
    throw error;
  }
};
