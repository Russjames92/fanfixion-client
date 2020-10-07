import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { EpisodeListProvider } from './contexts/EpisodeListContext'
import { EpisodeProvider } from './contexts/EpisodeContext'
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <EpisodeListProvider>
            <EpisodeProvider>
                <App />
            </EpisodeProvider>
        </EpisodeListProvider>
    </BrowserRouter>, document.getElementById('root'));
