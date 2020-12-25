import React, { Component } from 'react'
import EpisodeApiService from '../services/episode-api-service'

const EpisodeListContext = React.createContext({
    episodeList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setEpisodeList: () => { },
})
export default EpisodeListContext

export class EpisodeListProvider extends Component {
    state = {
        episodeList: [],
        error: null,
    };

    setEpisodeList = episodeList => {
        this.setState({ episodeList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    removeEpisode = epId => {
        console.log('from remove Episode', epId)
        const newArry = this.state.episodeList.filter(episode => episode.id !== epId)
        console.log(newArry)
        this.setState({
            episodeList: newArry
        })
    }

    componentDidMount() {
        EpisodeApiService.getEpisodes()
            .then(this.setEpisodeList)
            .catch(this.setError)
    }

    render() {
        const value = {
            episodeList: this.state.episodeList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEpisodeList: this.setEpisodeList,
            removeEpisode: this.removeEpisode,
        }
        return (
            <EpisodeListContext.Provider
                value={value}
            >
                {this.props.children}
            </EpisodeListContext.Provider>
        )
    }
}