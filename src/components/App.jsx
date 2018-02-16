import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Header from './Header';
import TapList from './TapList';
import Login from './Login';
import Error404 from './Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {}
    }
  }

  render() {
    return(
      <div>
        <style global jsx>{`
          html, body, div, h1, h2, p, ul, ol, li{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Helvetica, arial, sans-serif;
          }
          body{
            color: #333;
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={TapList} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
