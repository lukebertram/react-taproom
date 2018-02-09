import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>${props.price}</p>
      <p>{props.brewery}</p>
      <p>{props.alcoholContent}% ABV</p>
      <p>{props.pintsRemaining}</p>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  pintsRemaining: PropTypes.number
}

export default Tap;
