import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar(props){
  var myStyle = {
    width: '100%'
  };

  return(
    <div className='col-sm-3'>
      <style jsx>{`
        .empty {
          background-color: red !important;
        }
        .half {
          background-color: yellow !important;
          color: black;
        }
        .full {
          background-color: green !important;
        }
        .col-sm-3 {
          margin-top: 40px;
        }
       `}
      </style>
      <div className='progress level-bar'>
        <div className={`progress-bar ${props.level}`} role='progressbar' style={myStyle} aria-valuenow={props.pints} aria-valuemin="0" aria-valuemax="124">{props.pints}
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  pints: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired
};

export default ProgressBar;
