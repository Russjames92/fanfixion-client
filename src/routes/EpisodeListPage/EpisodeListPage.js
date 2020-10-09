import React, { Component } from 'react'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodePost from '../../components/EpisodePost/EpisodePost'
import NavBar from '../../components/NavBar/NavBar'
import './EpisodeListPage.css'

export default class EpisodeListPage extends Component {
    static contextType = EpisodeListContext

    componentDidMount() {
        this.context.clearError()
        EpisodeApiService.getEpisodes()
            .then(this.context.setEpisodeList)
            .catch(this.context.setError)
    }

    renderEpisodes(episodeList) {
        // const { episodeList = [] } = this.context
        console.log('episode list', episodeList)
        return episodeList.map(episode => 
            <EpisodePost
                key={episode.id}
                episode={episode}
            />
        )
    }

    render() {
        const { error, episodeList } = this.context
        console.log('episode list context', this.context)
        return (
            <div className="EpisodeListPage">
                <NavBar />
                {error
                    ? <p classname='red'>There was an error, try again</p>
                    : this.renderEpisodes(episodeList)}
            </div>
        )
    }
}