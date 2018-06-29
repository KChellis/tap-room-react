import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar(props){

  return(
    <div className='buttons col-sm-4'>
      <style jsx>{`
          .buttons {

          }
       `}
      </style>
      <p>progress bar here {props.pints}</p>
    </div>
  );
}

ProgressBar.propTypes = {
  pints: PropTypes.number.isRequired
};

export default ProgressBar;
