import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return(
    <div className='tap'>
      <div className='title'>
        <h2>{props.name}</h2>
      </div>
      <div className='body'>
        <p>${props.price}</p>
        <p>{props.brewery}</p>
        <p>{props.alcoholContent}% ABV</p>
        <p>{props.pintsRemaining}</p>
      </div>
      <style jsx>{`
        .tap{
          background-color: #ccc;
          margin: 10px;
          width: 30%;
        }
        .title{
          background-color: #555;
          color: #fff;
          padding: 10px;
        }
        .body{
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  pintsRemaining: PropTypes.number
};

export default Tap;
