import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Render HomePage component when path is '/' */}
        {/* Add more Route components for additional routes if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
