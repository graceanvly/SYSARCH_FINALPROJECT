import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className='pages'>
          <Routes>
            <Route path = "/" element = {<Home />}/>
             <Route path ="/login" element = {<Login/>}/>
             <Route path ="/Register" element= {<Register/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
