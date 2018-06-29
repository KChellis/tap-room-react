
import React from 'react';
import KegList from './KegList';

function App(){
  return (
    <div>
      <h1>Welcome to the Tap Room!</h1>
      <KegList/>
      <button className='btn btn-info'>Add Keg</button>
    </div>
  );
}

export default App;
