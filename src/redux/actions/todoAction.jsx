import axios from "axios";

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get("https://dummyjson.com/todos");
    dispatch({ type: "FETCH_TODOS_SUCCESS", payload: response.data.todos });
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_FAILURE", error: error.message });
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post("https://dummyjson.com/todos/add", todo);
    dispatch({ type: "ADD_TODO_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ADD_TODO_FAILURE", error: error.message });
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`https://dummyjson.com/todos/${id}`, {
      completed: true,
    });
    dispatch({ type: "TOGGLE_TODO_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "TOGGLE_TODO_FAILURE", error: error.message });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://dummyjson.com/todos/${id}`);
    dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_TODO_FAILURE", error: error.message });
  }
};

export default todoAction;
