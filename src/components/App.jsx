import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TapList from './TapList';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <style global jsx>{`
        
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
