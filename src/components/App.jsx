import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TapList from './TapList';
import Error404 from './Error404';

function App(){
  return(
    <Switch>
      <Route exact path='/' component={TapList} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
