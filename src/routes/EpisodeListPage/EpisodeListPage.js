import React, { Component } from 'react'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import EpisodePost from '../../components/EpisodePost/EpisodePost'
import NavBar from '../../components/NavBar/NavBar'
import './EpisodeListPage.css'

export default class EpisodeListPage extends Component {
    static contextType = EpisodeListContext

    componentDidMount() {
        this.context.clearError()
    }

    renderEpisodes(episodeList) {
        return episodeList.map(episode =>
            <EpisodePost
                key={episode.id}
                episode={episode}
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
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderEpisodes(episodeList)}
                </div>
            </>
        )
    }
}