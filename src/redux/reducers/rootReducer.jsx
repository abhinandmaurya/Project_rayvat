import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  todos: todoReducer,
});

export default rootReducer;
