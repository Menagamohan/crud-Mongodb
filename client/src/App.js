// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaDatabase } from 'react-icons/fa';
import './App.css';
import Home from './Home';
import Crud from './Crud';

import logo from './images/logo.png';

function App() {
  return (
    <Router>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" style={{ height: '20px', width: '100px' }} />
          </Link></li>
          <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/crud" className="nav-link">
            <FaDatabase className="icon" /> CRUD
          </Link>
        </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
