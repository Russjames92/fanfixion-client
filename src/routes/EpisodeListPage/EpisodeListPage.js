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
        // console.log('from episodeList Page', this.context.episodeList)
        return episodeList.map(episode =>
            <EpisodePost
                key={episode.id}
                episode={episode}
                episodeList={this.context.episodeList}
            />
        )
    }

    render() {
        const { error, episodeList } = this.context
        return (
            <>
                <NavBar />
                <div className="EpisodeListPage">
                    {error
                        ? <p classname='red'>There was an error, try again</p>
                        : this.renderEpisodes(episodeList)}
                </div>
            </>
        )
    }
}