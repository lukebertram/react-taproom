import React from 'react';
import PropTypes from 'prop-types';
import Tap from './Tap';

function TapList(props){
  return(
    <div className='container'>
      <h1>TapList</h1>
      <div className='taplist'>
        {props.tapList.map((keg, index) =>
          <Tap
            name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsRemaining={keg.pintsRemaining}
            currentRouterPath={props.currentRouterPath}
            key={index}/>
        )}
      </div>
      <button>Tap New Keg</button>
      <style jsx>{`
        .container{
          padding: 10px;
        }
        h1{
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

TapList.propTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string
}

export default TapList;
