import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Express API'nizin URL'si

// Todo listesini alma
async function getTodos() {
  try {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
}

// Yeni bir todo ekleme
async function addTodo(newTodo) {
  try {
    const response = await axios.post(`${API_URL}/todos`, newTodo);
    console.log(response.data,"api.js içindeki response.data")
    return response.data;

  } catch (error) {
    console.error('Error adding todo:', error);
    return null;
  }
}

// Bir todo'yu silme
async function deleteTodo(todoId) {
  try {
    const response = await axios.delete(`${API_URL}/todos/:${todoId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    return null;
  }
}

// Bir todo'yu güncelleme
async function updateTodo(todoId, updatedTodo) {
  console.log(todoId,updatedTodo,"APİJS")
  try {
    const response = await axios.put(`${API_URL}/todos/:${todoId}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    return null;
  }
}

export { getTodos, addTodo, deleteTodo, updateTodo };