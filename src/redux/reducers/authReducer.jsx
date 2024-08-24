import React from "react";
const initialState = {
  token: localStorage.getItem("token") || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return { ...state, token: action.payload, error: null };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default authReducer;
