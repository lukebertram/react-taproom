import React from 'react';
import Tap from './Tap';

const kegs = [
  {
    name: 'Dragon\'s Breath',
    price: 10,
    brewery: 'Spielburg Brewery',
    alcoholContent: 500,
    pintsRemaining: 124
  },
  {
    name: 'Butterbeer',
    price: 5,
    brewery: 'Hogwarts Cellars',
    alcoholContent: 0,
    pintsRemaining: 124
  },
  {
    name: 'Motor Oil',
    price: 7,
    brewery: 'Mobil',
    alcoholContent: 0,
    pintsRemaining: 124
  },
  {
    name: 'Total Domination IPA',
    price: 5,
    brewery: 'Ninkasi',
    alcoholContent: 6.7,
    pintsRemaining: 124
  },

];

function TapList(){
  return(
    <div className='container'>
      <h1>TapList</h1>
      <div className='taplist'>
        {kegs.map((keg, index) =>
          <Tap
            name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsRemaining={keg.pintsRemaining}
            key={index}/>
        )}
      </div>
      <button>Tap New Keg</button>
      <style jsx>{`
        h1{
          margin: 10px;
        }
        .taplist{
          display: flex;
          flex-wrap: wrap;
        }
        button{

        }
      `}</style>
    </div>
  );
}

export default TapList;
