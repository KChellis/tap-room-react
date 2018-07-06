import React from 'react';
import PropTypes from 'prop-types';

function BottomButtons(props){
  let buttons;
  if(props.mode ==='admin'){
    buttons = <button onClick= {props.onAddKeg}>Add Keg</button>
    <button>User mode</button>;
  } else {
    buttons = <button>Admin mode</button>;
  }
  return(
    <div className='buttons col-sm-4'>
      <style jsx>
        {`
          button {
            box-shadow: 4px 4px 4px black;
            margin: 10px;
            background-color: #a5a4a5;
          }
          `}
      </style>
     {buttons}
    </div>
  );
}

Buttons.propTypes = {
  mode: PropTypes.string,
  onAddKeg: PropTypes.func,
  onModeChange: PropTypes.func
};

export default BottomButtons;
