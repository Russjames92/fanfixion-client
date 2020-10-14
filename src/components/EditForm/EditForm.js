import React, { Component } from 'react'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeContext from '../../contexts/EpisodeContext'
import { Redirect } from 'react-router-dom'

function RRender() {
    return (
        <Redirect push to='/' />
    )
}

export default class EditForm extends Component {
    state = {
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
            title: episode.title,
            content: episode.content,
            image: episode.image,
            redirect: false,
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const episode = this.context
        const { title, content, image } = ev.target
        if (window.confirm(`Save changes to ${episode.episode.title}?`)) {
            EpisodeApiService.updateEpisode(episode.episode.id, title.value, content.value, image.value)
                .then(this.context.updateEpisode)
                // .then(() => {
                //     title.value = ''
                //     content.value = ''
                //     image.value = ''
                // })
                .then(this.setState({ redirect: true }))
                .catch(this.context.setError)
        }
    }

    changeTitle = ev => {
        this.setState({
            title: ev.target.value,
        })
    }

    changeContent = ev => {
        this.setState({
            content: ev.target.value,
        })
    }

    changeImage = ev => {
        this.setState({
            image: ev.target.value,
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
                    onChange={this.changeTitle}
                />
                <textarea
                    type="text"
                    name="content"
                    className="content"
                    value={this.state.content}
                    onChange={this.changeContent}
                />
                <input
                    name="image"
                    className="image"
                    value={this.state.image}
                    onChange={this.changeImage}
                />
                <button
                    type="submit"
                    className="create-post-submit"
                >UPDATE EPISODE</button>
            </form>
        )
    }
}