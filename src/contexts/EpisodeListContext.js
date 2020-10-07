import React, { Component } from 'react'

const EpisodeListContext = React.createContext({
    episodeList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setEpisodeList: () => {},
})
export default EpisodeListContext

export class EpisodeListProvider extends Component {
    state = {
        episodeList: [],
        error: null,
    };

    setEpisodeList = episodeList => {
        console.log('setEpisodeList is called', episodeList)
        this.setState({ episodeList }, () => {
            console.log('state from context', this.state)
        })

    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            episodeList: this.state.episodeList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEpisodeList: this.setEpisodeList,
        }
        return (
            <EpisodeListContext.Provider value={value}>
                {this.props.children}
            </EpisodeListContext.Provider>
        )
    }
}