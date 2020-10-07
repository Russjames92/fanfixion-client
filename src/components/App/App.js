import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import EpisodeListContext from '../../contexts/EpisodeListContext'
// import PrivateRoute from '../Utils/PrivateRoute'
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import EpisodeListPage from '../../routes/EpisodeListPage/EpisodeListPage'
// import './App.css'

class App extends Component {
  state = { hasError: false }

  static contextType = EpisodeListContext

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            path={'/'}
            component={EpisodeListPage}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
