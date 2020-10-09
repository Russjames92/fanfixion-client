import React, { Component } from 'react'

export const nullEpisode = {
    author: {},
    tags: [],
}

const EpisodeContext = React.createContext({
    episode: nullEpisode,
    error: [],
    setError: () => {},
    clearError: () => { },
    setEpisode: () => {},
    clearEpisode: () => {},
    addEpisode: () => {},
    deleteEpisode: () => {},
    updateEpisode: () => {},
})

export default EpisodeContext

export class EpisodeProvider extends Component {
    state = {
        episode: nullEpisode,
        error: null,
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setEpisode = episode => {
        this.setState({ episode })
    }

    clearEpisode = () => {
        this.setState(nullEpisode)
    }

    addEpisode = episode => {
        this.setState({ episode })
    }

    updateEpisode = episode => {
        this.setState({ episode })
    }

    deleteEpisode = () => {
        this.setState({})
    }

    render() {
        const value = {
            episode: this.state.episode,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEpisode: this.setEpisode,
            clearEpisode: this.clearEpisode,
            addEpisode: this.addEpisode,
            updateEpisode: this.updateEpisode,
            deleteEpisode: this.deleteEpisode,
        }
        return (
            <EpisodeContext.Provider value={value}>
                {this.props.children}
            </EpisodeContext.Provider>
        )
    }
}