import React from 'react';

function NewTapForm(){
  return(
    <div className='new-tap'>
      <h2>New Tap </h2>
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

export default NewTapForm;
