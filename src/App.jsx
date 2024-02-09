import React from 'react';
import MusicCard from './components/MusicCard';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>My Music App</h1>
      <div className="music-cards">
        <MusicCard type="online-mode" />
        <MusicCard type="master-volume" />
        <MusicCard type="sound-quality" />
      </div>
      <Dashboard />
    </div>
  );
};

export default App;

