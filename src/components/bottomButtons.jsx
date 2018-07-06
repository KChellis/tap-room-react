import React from 'react';
import PropTypes from 'prop-types';

function BottomButtons(props){
  let buttons = null;
  if(props.userMode ==='admin'){
    buttons = <div><button className='btn btn-info'  onClick= {props.onToggleForm}>Add Keg</button>
      <button className='btn btn-info' onClick={props.onToggleMode}>User mode</button></div>;
  } else {
    buttons = <button className='btn btn-info' onClick={props.onToggleMode}>Admin mode</button>;
  }
  return(
    <div>
      <style jsx>
        {`
          button{
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

BottomButtons.propTypes = {
  userMode: PropTypes.string,
  onToggleForm: PropTypes.func,
  onToggleMode: PropTypes.func
};

export default BottomButtons;
