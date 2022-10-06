import axios from "axios";
const url = "https://api-mern-todos.herokuapp.com/todos";

export const readTodos = () => axios.get(url);
export const createTodos = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (id, updateTodo) =>
  axios.patch(`${url}/${id}`, updateTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
