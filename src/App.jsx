// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  //Routers to pages

//Pages
import Navbar from './Components/layout/navbar'; // Navbar component
import Home from './pages/Home/Home'; // Home page
import About from './pages/About/About'; // About page
import Contact from './pages/Contact/Contact'; //Contact page
import Carbon from './pages/Carbon-calculate/Carbon';
import New from './pages/News/News';

const App = () => {
     return (
          <Router>
               <Navbar/>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/carbon' element={<Carbon/>}/>
                    <Route path='/news' element={<New/>}/>
               </Routes>
          </Router>
     );
};

export default App;
