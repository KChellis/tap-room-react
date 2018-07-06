import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){

  return(
    <div className='kegList'>
      <style jsx>{`
          .kegList {

          }
       `}
      </style>
      {props.kegList.map((keg) =>
        <Keg name ={keg.name}
          brewer={keg.brewer}
          type={keg.type}
          abv={keg.abv}
          ibu={keg.ibu}
          prices={keg.prices}
          color={keg.color}
          pints={keg.pints}
          level={keg.level}
          key={keg.id} />
      )}
    </div>
  );
}

KegList.propTypes = {
  userMode: PropTypes.string.isRequired,
  kegList: PropTypes.array
};

export default KegList;
