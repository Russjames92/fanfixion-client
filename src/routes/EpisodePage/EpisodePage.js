import React, { Component } from 'react'
import EpisodeContext from '../../contexts/EpisodeContext'
import EpisodeApiService from '../../services/episode-api-service'
import NavBar from '../../components/NavBar/NavBar'
import './EpisodePage.css'

export default class EpisodePage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = EpisodeContext

    componentDidMount() {
        const { episode_id } = this.props.match.params
        this.context.clearError()
        EpisodeApiService.getEpisode(episode_id)
            .then(this.context.setEpisode)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearEpisode()
    }

    render() {
        const { episode } = this.context
        return (
            <>
                <NavBar />
                <div className='EpisodePage__image' style={{backgroundImage: `url(${episode.image})`}}/>
                <div className='EpisodePage'>
                    <h2 className='ep-title'>{episode.title}</h2>
                    <p className='ep-content'>{episode.content}</p>
                </div>
            </>
        )
    }
}