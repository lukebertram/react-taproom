import React from 'react';

function Header(){
  return(
    <header>
      <h1>Header works</h1>
      <style jsx>{`
        header{
          height: 85px;
          background-color: #ccc;
        }
      `}</style>
    </header>
  );
}

export default Header;
