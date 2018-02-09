import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TapList from './TapList';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <style global jsx>{`
        html, body, div, h1, h2, p, ul, ol, li{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Helvetica, arial, sans-serif;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
