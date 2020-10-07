import React, { Component } from 'react'
import EpisodeContext from '../../contexts/EpisodeContext'
import EpisodeApiService from '../../services/episode-api-service'

export default class EpisodePage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = EpisodeContext

    componentDidMount() {
        const { episodeId } = this.props.match.params
        this.context.clearError()
        EpisodeApiService.getEpisode(episodeId)
            .then(this.context.setEpisode)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearEpisode()
    }

    renderEpisode() {
        const { episode } = this.context
        return <>
            <div className='EpisodePage__image' style={{backgroundImage: `url(${episode.image})`}}/>
            <h2>{episode.title}</h2>
            <EpisodeContent episode={episode} />
        </>
    }

    render() {
        const { error, episode } = this.context
        let content
        if (error) {
            content = (error.error === `Episode does not exist`)
                ? <p className='red'>Episode not found</p>
                : <p className='red'>There was an error</p>
        } else if (!episode.id) {
            content = <div className='loading' />
        } else {
            content = this.renderEpisode
        }
        return (
            {content}
        )
    }
}

function EpisodeContent ({ episode }) {
    return (
        <p className='EpisodePage__content'>
            {episode.content}
        </p>
    )
}