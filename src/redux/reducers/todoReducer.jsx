const initialState = {
  items: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return { ...state, items: action.payload };
    case "FETCH_TODOS_FAILURE":
      return { ...state, error: action.error };
    case "ADD_TODO_SUCCESS":
      return { ...state, items: [...state.items, action.payload] };
    case "ADD_TODO_FAILURE":
    case "TOGGLE_TODO_FAILURE":
    case "DELETE_TODO_FAILURE":
      return { ...state, error: action.error };
    case "TOGGLE_TODO_SUCCESS":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
