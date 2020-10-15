import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import EpisodeListPage from '../../routes/EpisodeListPage/EpisodeListPage'
import CreatePage from '../../routes/CreatePage/CreatePage'
import EpisodePage from '../../routes/EpisodePage/EpisodePage'
import EditPage from '../../routes/EditPage/EditPage';
import './App.css'
import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  state = {
    hasError: false,
  }

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
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route
            path={'/home'}
            component={EpisodeListPage}
          />
          <Route
            path={'/create'}
            component={CreatePage}
          />
          <Route
            exact
            path={'/:episode_id'}
            component={EpisodePage}
          />
          <Route
            exact
            path={'/edit-page/:episode_id'}
            component={EditPage}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
