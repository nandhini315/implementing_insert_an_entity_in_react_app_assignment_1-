import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-book" element={<AddBook />} />
    </Routes>
  );
};

export default App;