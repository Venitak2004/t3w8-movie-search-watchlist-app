import axios from "axios";
import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setmovies] = useState([]);

  const fetchMovies = async () => {
    // Using fetch
    //const response = await fetch(`https://www.omdbapi.com/${apikey}/${query}`);

    // Using axios
    if (query) {
      const response = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          apikey: "1db4bca0",
          s: query
        }
      });
      console.log(response.data);
      setmovies(response.data.Search || []);
    }
  };

  return (
    <div className="container my-4">

      <h1 className="text-center mb-4">Move Search</h1>
      <div className="row">
        <div className="col-md-8 offset md-2">
        <input
          type="text"
          placeholder="Search for Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-prmiary btn-block mt-2" onClick={fetchMovies}>Search</button>
      </div>
      <div className="row mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
