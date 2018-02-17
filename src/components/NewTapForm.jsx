import React from 'react';
import PropTypes from 'prop-types';

function NewTapForm(props){
  let _name = null;
  let _price = null;
  let _brand = null;
  let _alcoholContent = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onAddNewTapToList(
      {
        name: _name.value,
        price: parseFloat(_price.value),
        brewery: _brand.value,
        alcoholContent: parseFloat(_alcoholContent.value),
        pintsRemaining: 124
      }
    )
    _name.value = '';
    _price.value = '';
    _brand.value = '';
    _alcoholContent.value = '';
    props.onNewTapFormSubmissionHide();
  }

  return(
    <div className='new-tap'>
      <h2>New Tap </h2>
      <form onSubmit={handleNewTapFormSubmission}>
        <label>Name</label><br/>
        <input
          type='text'
          id='name'
          ref={(input) => {_name = input;}}/><br/>
        <label>Price per pint:</label><br/>
        <input
          type='number'
          id='price'
          ref={(input) => {_price = input;}}/><br/>
        <label>Brand:</label><br/>
        <input
          type='text'
          id='brand'
          ref={(input) => {_brand = input;}}/><br/>
        <label>%ABV:</label><br/>
        <input
          type='number'
          id='alcoholContent'
          ref={(input) => {_alcoholContent = input;}}/><br/>
        <button type='submit'>Submit</button>
      </form>

      <style jsx>{`
        .new-tap{
          margin-top: 20px;
          background-color: #ccc;
          border-radius: 5px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

NewTapForm.propTypes = {
  onAddNewTapToList: PropTypes.func,
  onNewTapFormSubmissionHide: PropTypes.func
}

export default NewTapForm;
