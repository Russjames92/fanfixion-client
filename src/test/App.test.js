import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { EpisodeListProvider } from '../contexts/EpisodeListContext'
import { EpisodeProvider } from '../contexts/EpisodeContext'
import App from '../components/App/App'

it('renders without crashing', () => {
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