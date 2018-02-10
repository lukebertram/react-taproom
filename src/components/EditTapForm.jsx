import React from 'react';

function EditTapForm(){
  return(
    <div className='edit-tap'>
      <h2>Edit Tap </h2>
      <label>Name</label><br/>
      <input type='text'></input><br/>
      <label>Price per pint:</label><br/>
      <input type='number'></input><br/>
      <label>Brand:</label><br/>
      <input type='text'></input><br/>
      <label>%ABV:</label><br/>
      <input type='number'></input><br/>
      <button>Submit</button>
      <style jsx>{`
        .edit-tap{
          margin-top: 20px;
          background-color: #ccc;
          border-radius: 5px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

export default EditTapForm;
