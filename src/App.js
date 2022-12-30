import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App1() {
  return (
    <div className="App1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/login_in" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App1;
