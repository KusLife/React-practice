import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './componemts/UI/Navbar/Navbar';
import Error from './pages/Error';
import AppPosts from './pages/AppPosts';

const App = () => {
  return (
    <div className="App">
      <Navbar />

     <AppPosts/>
    </div>
  );
};

export default App;
