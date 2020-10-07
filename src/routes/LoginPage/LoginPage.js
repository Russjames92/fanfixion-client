import React, { Component } from 'react'
import LandingPage from '../../components/LandingPage/LandingPage'


export default class LoginPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/'
      history.push(destination)
    }
  
    render() {
      return (
          <LandingPage
            onLoginSuccess={this.handleLoginSuccess}
          />
      )
    }
  }