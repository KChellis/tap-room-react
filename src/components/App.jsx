
import React from 'react';
import KegList from './KegList';

function App(){
  return (
    <div className='app'>
      <style jsx global>
        {`
          button {
            box-shadow: 4px 4px 4px black;
            margin: 10px;
            background-color: #a5a4a5;
          }
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
      <KegList/>
      <button className='btn btn-info'>Add Keg</button>
    </div>
  );
}

export default App;
