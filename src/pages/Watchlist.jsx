import React from "react";
import { useWatchlist } from "../context/WatchlistContext";

const Watchlist = () => {
  // Fetch two out of three options from the custom hook
  const { watchlist, removeFromwatchlist } = useWatchlist();
  return (
    <div>
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty. Start adding some movies!</p>
      ): (
        <ul>
            {watchlist.map((movie) => (
                <li>
                    <strong>{movie.Title}</strong> ({movie.Year})
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                    <button
                        onClick={() => removeFromwatchlist(movie.imdbID)}
                        style={{color: 'red'}}
                        >
                        Remove
                        </button>
                </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
