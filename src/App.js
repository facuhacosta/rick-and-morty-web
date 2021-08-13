import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/navBar/navigation';
import GetData from './Components/dataManagement/fetchAPI';
import CharactersList from './Components/charactersList/charactersList';

function App() {

  return (
    <div className="App">
      <Navigation />
      <CharactersList />
    </div>
  );
}

export default App;
