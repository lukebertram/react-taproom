import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Header from './Header';
import TapList from './TapList';
import Login from './Login';
import Error404 from './Error404';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTap: null,
      masterTapList: [
        {
          name: 'Dragon\'s Breath',
          price: 10,
          brewery: 'Spielburg Brewery',
          alcoholContent: 500,
          pintsRemaining: 124
        },
        {
          name: 'Butterbeer',
          price: 5,
          brewery: 'Hogwarts Cellars',
          alcoholContent: 0,
          pintsRemaining: 124
        },
        {
          name: 'Motor Oil',
          price: 7,
          brewery: 'Mobil',
          alcoholContent: 0,
          pintsRemaining: 124
        },
        {
          name: 'Total Domination IPA',
          price: 5,
          brewery: 'Ninkasi',
          alcoholContent: 6.7,
          pintsRemaining: 124
        }
      ]
    };
    this.handleAddNewTapToList = this.handleAddNewTapToList.bind(this);
  }

  handleAddNewTapToList(newTap){
    const newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
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
          <Route
            exact path='/'
            render={()=>
              <TapList
                tapList={this.state.masterTapList}/>} />
          <Route
            path='/admin'
            render={(props)=>
              <Admin
                tapList={this.state.masterTapList}
                selectedTap={this.state.selectedTap}
                onAddNewTapToList={this.handleAddNewTapToList}
                currentRouterPath={props.location.pathname} />} />
          <Route path='/login' component={Login} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
