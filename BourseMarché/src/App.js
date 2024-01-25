// /src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainPanel from './components/MainPanel';
import './App.css';

function App() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/actions')
      .then(response => {
        setActions(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des actions:', error);
      });
  }, []);

  return (
    <div className="App">
      <Sidebar /> {/* Barre latérale avec navigation */}
      <Navbar /> {/* Barre de navigation supérieure */}
      <div className="main-content">
        <MainPanel actions={actions} setActions={setActions} />
      </div>
    </div>
  );
}

export default App;