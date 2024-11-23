import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "./components/Header";
import Movie from "./components/Movie";

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);
  const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchMovies("man");
  }, [dispatch]);

  const fetchMovies = async (query) => {
    dispatch({ type: "FETCH_MOVIES_REQUEST" });

    setTimeout(() => {
      setShowLoading(true);
    }, 3000);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=57c4feb0`
      );
      dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: response.data.Search });
    } catch (err) {
      dispatch({ type: "FETCH_MOVIES_FAILURE", payload: err.message });
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
    fetchMovies(query);
  };

  return (
    <div>
      <Header title="MovStream" onSearch={handleSearch} />
      {loading && showLoading && (
        <div className="text-center mt-4">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="Loading..."
            className="loading-gif"
            style={{ width: "100px" }}
          />
        </div>
      )}
      {error && <p>Error: {error}</p>}

      <div className="container">
        {query === "" && <h4 className="my-3">Most Popular</h4>}

        <div className="row">
          {movies &&
            movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
