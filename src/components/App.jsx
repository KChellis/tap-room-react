
import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import EarlyMath from './EarlyMath';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <h1>Welcome to the Tap Room!</h1>
      <KegList/>
      <AddEditKegForm/>
      <button>Add Keg</button>
    </div>
  );
}

export default App;
