import React, { Component } from 'react'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeContext from '../../contexts/EpisodeContext'
import { Redirect } from 'react-router-dom'

function RRender() {
    return (
        <Redirect push to='/home' />
    )
}

export default class EditForm extends Component {
    state = {
        id: '',
        title: '',
        content: '',
        image: '',
        redirect: null,
    }

    static contextType = EpisodeContext

    componentDidMount() {
        const epId = Number(this.props.episodeId.episode_id)
        const episodeList = this.props.episodeList
        let episode = {}
        for (let i = 0; i < episodeList.length; i++) {
            if (episodeList[i].id === epId) {
                episode = episodeList[i]
            }
        }

        this.setState({
            id: epId,
            title: episode.title,
            content: episode.content,
            image: episode.image,
            redirect: false,
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        if (window.confirm(`Save changes to ${this.state.title}?`)) {
            EpisodeApiService.updateEpisode(this.state.id, this.state.title, this.state.content, this.state.image)
                .then(this.context.updateEpisode)
                .then(this.setState({ redirect: true }))
                .catch(this.context.setError)
        }
    }

    handleChange = ev => {
        this.setState({
            [ ev.target.name ]: ev.target.value
        })
    }

    render() {
        if (this.state.redirect === true) {
            return (
                <RRender />
            )
        }
        return (
            <form onSubmit={this.handleSubmit} action="submit" className="create-post">
                <input
                    type="text"
                    name="title"
                    className="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <textarea
                    type="text"
                    name="content"
                    className="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                />
                <input
                    name="image"
                    className="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    className="create-post-submit"
                >UPDATE EPISODE</button>
            </form>
        )
    }
}