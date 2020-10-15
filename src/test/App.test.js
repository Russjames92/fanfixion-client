import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { EpisodeListProvider } from '../contexts/EpisodeListContext'
import { EpisodeProvider } from '../contexts/EpisodeContext'
import App from '../components/App/App'
import CreateForm from '../components/CreateForm/CreateForm'
import EditForm from '../components/EditForm/EditForm'
import EpisodePost from '../components/EpisodePost/EpisodePost'
import LandingPage from '../components/LandingPage/LandingPage'
import NavBar from '../components/NavBar/NavBar'
import CreatePage from '../routes/CreatePage/CreatePage'
import EditPage from '../routes/EditPage/EditPage'
import EpisodeListPage from '../routes/EpisodeListPage/EpisodeListPage'
import EpisodePage from '../routes/EpisodePage/EpisodePage'
import LoginPage from '../routes/LoginPage/LoginPage'

describe('basic test to make sure each component renders without crashing', () => {
  it('renders App component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <App />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders CreateForm component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <CreateForm />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders EditPage component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <App>
              <EditPage>
                <EditForm />
              </EditPage>
            </App>
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders EpisodePost component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <EpisodeListPage>
              <EpisodePost />
            </EpisodeListPage>
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders LandingPage component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <LandingPage />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders NavBar component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <NavBar />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders CreatePage route without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <CreatePage />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders EpisodeListPage route without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <EpisodeListPage />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders EpisodePage route without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <EpisodePage />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders LoginPage route without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <EpisodeListProvider>
          <EpisodeProvider>
            <LoginPage />
          </EpisodeProvider>
        </EpisodeListProvider>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})