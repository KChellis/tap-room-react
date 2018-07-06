import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props){
  if(props.userMode === 'user'){
    return(
      <div className='col-sm-4'></div>
    )
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
          <button className='btn btn-info'>Edit</button>
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
  pints: PropTypes.number.isRequired,
  userMode: PropTypes.string.isRequired
};

export default Buttons;
