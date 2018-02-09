import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return(
    <Switch>
      <Route exact path='/' component={Test} />
      <Route component={Error404} />
    </Switch>
  );
}

//delete the following component after testing functionality
function Test(){
  return(
    <h1>Test Component, App, and Router operational</h1>
  );
}

export default App;
