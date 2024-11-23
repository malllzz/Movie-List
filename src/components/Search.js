import React, { useReducer } from "react";

const queryReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return action.payload;
    default:
      return state;
  }
};

const Search = ({ onSearch }) => {
  const [query, dispatch] = useReducer(queryReducer, "");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    dispatch({ type: "SET_QUERY", payload: "" });
  };

  return (
    <form className="d-flex justify-content-end" onSubmit={handleSearch}>
      <div className="input-group m-2" style={{ maxWidth: "300px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search a movie"
          value={query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
