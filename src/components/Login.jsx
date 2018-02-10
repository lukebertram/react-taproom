import React from 'react';

function Login(){
  return(
    <div className='container'>
      <h1>Login Section</h1>
      <p>
        This is where employees will log in to edit and add taps
        in a future version of the taproom application.
      </p>
      <style jsx>{`
        .container {
          text-align: center;
          max-width: 900px;
          margin: auto;
        }
        h1{
          margin-top: 10px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default Login;
