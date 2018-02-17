import React from 'react';
import PropTypes from 'prop-types';

function AddNewTapButton(props){
  return(
    <button onClick={props.onAddNewTapClick}>Add New Tap</button>
  );
}

AddNewTapButton.propTypes = {
  onAddNewTapClick: PropTypes.func
}

export default AddNewTapButton;
