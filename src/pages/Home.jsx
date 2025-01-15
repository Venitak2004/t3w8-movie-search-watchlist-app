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
    <div>
      <h1>Move Search</h1>
      <input
        type="text"
        placeholder="Search for Movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchMovies}>Search</button>

      <div>
        {
            movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie}/> 
            ))
        }
      </div>

    </div>
  );
}
