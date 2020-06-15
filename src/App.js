import React from 'react';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className="App">
      <ProfileContainer />
      <CardsContainer />
    </div>
  );
}

export default App;
