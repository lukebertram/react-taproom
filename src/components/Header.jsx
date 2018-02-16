import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const link = {
    textDecoration: 'none'
  }
  return(
    <header>
      <h1>TapRoom</h1>
      <ul className='nav'>
        <li><Link style={link} to='/'><a>Home</a></Link></li>
        <li><Link style={link} to='/login'><a>Login</a></Link></li>
        <li><Link style={link} to='/admin'><a>Admin</a></Link></li>
      </ul>
      <style jsx>{`
        header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
          background-color: #ccc;
          padding: 0 10px;
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          padding-left: 10px;
          color: #555;
        }
        a {
          color: #555;
          text-decoration: none;
        }
        a:hover {
          color: #000;
          text-decoration: underline;
        }
        a:active {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}

export default Header;
