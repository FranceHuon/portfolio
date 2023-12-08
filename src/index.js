import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Projets from './pages/Projets';
import Consonea from './pages/Consonea';
import DayByDay from './pages/DayByDay';
import Trucs from './pages/Trucs';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/home" element={<Accueil />} />
      <Route path='/about' element ={<About />} />
      <Route path="/projects" element={<Projets />} />
      <Route path="/consonea" element={<Consonea />} />
      <Route path="/daybyday" element={<DayByDay />} />
      <Route path="/trucs" element={<Trucs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    
  </React.StrictMode>
);



