import { createStore } from "redux";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "FETCH_MOVIES_SUCCESS":
      return { ...state, loading: false, movies: action.payload };
    case "FETCH_MOVIES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

let store = createStore(movieReducer);

export default store;