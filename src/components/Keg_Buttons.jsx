import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props){
  function handleEditClick(){
    props.onSetSelectedKegId(props.kegId);
    props.onToggleForm();
  }
  if(props.userMode === 'user'){
    return(
      <div className='col-sm-4'></div>
    );
  }else{
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
        <button onClick={handleEditClick} className='btn btn-info'>Edit</button>
        <button className='btn btn-info'>Delete</button>
        <br/>
        <button className='btn btn-info'>Pint</button>
        <button className='btn btn-info'>Growler(32 oz)</button>
        <button className='btn btn-info'>Growler(64 oz)</button>
        <button className="btn btn-info">Replace Keg</button>
      </div>
    );
  }
}

Buttons.propTypes = {
  kegId: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  userMode: PropTypes.string.isRequired,
  onSetSelectedKegId: PropTypes.func.isRequired,
  onToggleForm: PropTypes.func.isRequired
};

export default Buttons;
