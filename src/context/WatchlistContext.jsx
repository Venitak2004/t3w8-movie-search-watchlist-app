import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export default function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  // Add to Watchlist Function
  const addToWatchlist = (movie) => {
    setWatchlist((prev) => [...prev, movie]);
  };
  // Delete from Watchlist function
  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id != id));
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
     {children}
    </WatchlistContext.Provider>
  )
}

// Create a custom hook here
export function useWatchlist(){
    // Simply return the hook
    //return useContext(WatchlistContext);

    // Or check before sending the custome hook
    let context = useContext(WatchlistContext);
    if (!context) {
        console.log("No movies added.");
    }
    return context;

}