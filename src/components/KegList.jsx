import React from 'react';
import Keg from './Keg';

function KegList(){
  
  return(
    <div className='kegList'>
      <style jsx>{`
          .kegList {

          }
       `}
      </style>
      {kegList.map((keg, index) =>
        <Keg name ={keg.name}
          brewer={keg.brewer}
          type={keg.type}
          abv={keg.abv}
          ibu={keg.ibu}
          prices={keg.prices}
          color={keg.color}
          pints={keg.pints}
          level={keg.level}
          key={index} />
      )}
    </div>
  );
}

export default KegList;
