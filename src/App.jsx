// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layout/navbar'; // Componente Navbar
import Home from './pages/Home/Home'; // Página Home
import About from './pages/About/About'; // Página About

const App = () => {
     return (
          <Router>
               <Navbar/>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
               </Routes>
          </Router>
     );
};

export default App;
