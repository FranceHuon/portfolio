import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projets from './pages/Projets';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path='/about' element ={<About />} />
      <Route path="/projects" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    
  </React.StrictMode>
);



