import React from 'react';
import Details from './Keg_Details';
import Buttons from './Keg_Buttons';
import ProgressBar from './Keg_ProgressBar';
import PropTypes from 'prop-types';

function Keg(props){

  return(
    <div className={`keg row ${props.color}`}>
      <style jsx>{`
        .keg {
          border: 3px solid black;
          margin: 3px;
        }
        .light {
          background-color: #f4d177;
        }
        .medium {
          background-color: #e58939;
        }

        .dark {
          background-color: #723703;
          color: white;
        }
        .cider {
          background-color: #b4d68b;
        }
        .wine {
          background-color: #89024f;
        color: white;
        }
       `}
      </style>
      <Details name ={props.name}
        brewer={props.brewer}
        type={props.type}
        abv={props.abv}
        ibu={props.ibu}
        prices={props.prices}/>
      <Buttons pints={props.pints}
        userMode={props.userMode}/>
      <ProgressBar pints={props.pints}
        level={props.level}/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  userMode: PropTypes.string.isRequired
};

export default Keg;
