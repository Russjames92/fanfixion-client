import React, { Component } from 'react'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodePost from '../../components/EpisodePost/EpisodePost'

export default class EpisodeListPage extends Component {
    static contextType = EpisodeListContext

    componentDidMount() {
        this.context.clearError()
        EpisodeApiService.getEpisodes()
            .then(this.context.setEpisodeList)
            .catch(this.context.setError)
    }

    renderEpisodes() {
        const { episodeList = [] } = this.context
        return episodeList.map(episode => 
            <EpisodePost
                key={episode.id}
                episode={episode}
            />
        )
    }

    render() {
        const { error } = this.context
        console.log('episode list context', this.context)
        return (
            <div className='EpisodeListPage'>
                {error
                    ? <p classname='red'>There was an error, try again</p>
                    : this.renderEpisodes()}
            </div>
        )
    }
}