import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props){

  return(
    <div className='buttons col-sm-4'>
      <button className='btn btn-info'>Edit</button>
      <button className='btn btn-info'>Delete</button>
      <br/>
      if({props.pints}>0){
        <button className='btn btn-info'>Pint</button>
      }
      if({props.pints}>1){
        <button className='btn btn-info'>Growler(32 oz)</button>
      }
      if({props.pints}>3){
        <button className='btn btn-info'>Growler(64 oz)</button>
      }
      if({props.pints}=0){
        <button className="btn btn-info">Replace Keg</button>
      }
    </div>
  );
}

Buttons.propTypes = {
  pints: PropTypes.number.isRequired
};

export default Buttons;
