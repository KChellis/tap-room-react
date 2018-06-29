import React from 'react';
import PropTypes from 'prop-types';

function Details(props){

  return(
    <div className='details col-sm-4'>
      <style jsx>{`
          .details {

          }
       `}
      </style>
      <h4>{props.name} by {props.brewer}</h4>
      <p>{props.type}, ABV: {props.abv} IBU: {props.ibu}</p>
      <p>Pint: {props.prices[0]} Growler(32 oz): {props.prices[1]} Growler(64 oz): {props.prices[2]}</p>
    </div>
  );
}

Details.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Details;
