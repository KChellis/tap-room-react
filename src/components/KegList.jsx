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
      {Object.keys(props.kegList).map(function(kegId) {
        let keg = props.kegList[kegId];
        return <Keg name ={keg.name}
          brewer={keg.brewer}
          type={keg.type}
          abv={keg.abv}
          ibu={keg.ibu}
          prices={keg.prices}
          color={keg.color}
          pints={keg.pints}
          level={keg.level}
          kegId={kegId}
          key={kegId}
          userMode={props.userMode}
          onSetSelectedKegId={props.onSetSelectedKegId}
          onToggleForm={props.onToggleForm} />;
      })}
    </div>
  );
}

KegList.propTypes = {
  userMode: PropTypes.string.isRequired,
  kegList: PropTypes.object.isRequired,
  onSetSelectedKegId: PropTypes.func.isRequired,
  onToggleForm: PropTypes.func.isRequired
};

export default KegList;
