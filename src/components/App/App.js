import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'
import EpisodeFeed from '../EpisodeFeed/EpisodeFeed'
import LandingPage from "../LandingPage/LandingPage"

class App extends Component {
  state = {}

  // static //error function
  // {}

  render() {
    return (
      <div className='App'>
        <Route>
          path={'/'}
          component={LandingPage}
        </Route>
        <PrivateRoute
          path={'/episodes'}
          component={EpisodeFeed}
        />
      </div>
    )
  }
}

export default App;
