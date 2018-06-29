import React from 'react';
import Details from './Keg_Details';
import Buttons from './Keg_Buttons';
import ProgressBar from './Keg_ProgressBar';
import PropTypes from 'prop-types';

function Keg(props){

  return(
    <div className='keg'>
      <style jsx>{`
          .keg {

          }
       `}
      </style>
      <Details name ={props.name}
        brewer={props.brewer}
        type={props.type}
        abv={props.abv}
        ibu={props.ibu}
        prices={props.prices}/>
      <Buttons />
      <ProgressBar pints={props.pints}/>
    </div>
  );

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.string.isRequired,
    pints: PropTypes.number.isRequired
  };
}
