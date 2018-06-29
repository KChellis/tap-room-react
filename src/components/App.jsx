
import React from 'react';
import KegList from './KegList';
import AddEditKegForm from './AddEditKegForm';

function App(){
  return (
    <div className='app'>
      <style jsx global>
        {`
          h1 {
            text-align: center;
            font-size: 50px;
          }
          body {
            background-color: #274d21;
          background-image: url("https://www.transparenttextures.com/patterns/bright-squares.png");
          }
          `}
      </style>
      <h1>Welcome to the Tap Room!</h1>
      <KegList />
      <button className='btn btn-info .button'>Add Keg</button>
      <AddEditKegForm />
    </div>
  );
}

export default App;
