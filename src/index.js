import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Consonea from './pages/Consonea';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/consonea" element={<Consonea />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    
  </React.StrictMode>
);



