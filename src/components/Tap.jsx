import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  let tapControlButtons = null;
  if (props.currentRouterPath === '/admin'){
    tapControlButtons =
      <div className='tap-buttons'>
        <button className='pour-pint'>Pour Pint</button>
        <button className='edit-tap'>Edit</button>
      </div>;
  }
  return(
    <div className='tap'>
      <div className='title'>
        <h2>{props.name}</h2>
      </div>
      <div className='tap-body'>
        <div className='tap-info'>
          <p>${props.price}</p>
          <p>{props.brewery}</p>
          <p>{props.alcoholContent}% ABV</p>
          <p>{props.pintsRemaining}</p>
        </div>
        {tapControlButtons}
      </div>
      <style jsx>{`
        .tap{
          background-color: #ccc;
          margin: 10px;
          width: 30%;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          min-width: 300px;
        }
        .title{
          border-radius: 5px 5px 0 0;
          background-color: #555;
          color: #fff;
          padding: 10px;
        }
        .tap-body{
          flex: 1;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .tap-buttons{
          display: flex;
          flex-direction: column;
        }
        button{
          flex: 1;
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
