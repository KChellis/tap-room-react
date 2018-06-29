import React from 'react';
import Keg from './Keg';

function KegList(){
  const kegList = [
    {
      name: 'Superfuzz',
      brewer: 'Elysian Brewing',
      type: 'Blood Orange Pale Ale',
      abv: 6.4,
      ibu: 45,
      prices: [5.00, 9.00, 18.00],
      color: 'light'
    },
    {
      name: 'Citrus Mistress',
      brewer: 'Hop Valley Brewing',
      type: 'IPA',
      abv: 6.3,
      ibu: 80,
      prices: [5.00, 9.00, 18.00],
      color: 'light'
    },
    {
      name: 'Black Butte Porter',
      brewer: 'Dechutes Brewing',
      type: 'Porter',
      abv: 5.2,
      ibu: 30,
      prices: [5.00, 9.00, 18.00],
      color: 'dark'
    },
    {
      name: 'Cucumber Crush',
      brewer: '10 Barrel Brewing',
      type: 'Sour',
      abv: 5,
      ibu: 4,
      prices: [4.50, 8.50, 17.00],
      color: 'light'
    },
    {
      name: 'Pabst Blue Ribbon',
      brewer: 'Pabst Brewing',
      type: 'Piss',
      abv: 4.7,
      ibu: 10,
      prices: [3.00, 6.00, 12.00],
      color: 'light'
    },
    {
      name: 'Maid Marion',
      brewer: '2 Towns Ciderhouse',
      type: 'Marionberry Cider',
      abv: 6,
      ibu: 0,
      prices: [5.00, 9.00, 18.00],
      color: 'cider'
    },
    {
      name: 'Willamette Valley Pinot Noir',
      brewer: 'Boedecker Cellars',
      type: 'Pinot Noir',
      abv: 14,
      ibu: 0,
      prices: [6.00, 11.00, 22.00],
      color: 'red wine'
    }
  ]
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
          key={index} />
      )}
    </div>
  );
}

export default KegList;
