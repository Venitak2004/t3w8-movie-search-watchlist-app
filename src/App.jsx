//import './App.css'  removed the styling to install bootstrap
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import WatchlistProvider from './context/WatchlistContext.jsx';
import Watchlist from './pages/Watchlist.jsx';

function App() {
 

  return (
    <WatchlistProvider>
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/watchlist' element={<Watchlist />} />
      <Route path='/details/:id' element={<div>Details</div>} />    
    </Routes>
   </Router>
   </WatchlistProvider>
  )
}

export default App
