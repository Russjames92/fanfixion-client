import React, { Component } from 'react'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeContext from '../../contexts/EpisodeContext'
import { Redirect } from 'react-router-dom'

function RRender() {
    return (
        <Redirect push to='/' />
    )
}

export default class CreateForm extends Component {
    state = {
        image: "https://loremflickr.com/750/300/city?random=1",
        redirect: null,
    }

    static contextType = EpisodeContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { title, content, image } = ev.target
        

        EpisodeApiService.postEpisode(title.value, content.value, image.value)
            .then(this.context.addEpisode)
            .then(() => {
                title.value = ''
                content.value = ''
                image.value = ''
            })
            .then(this.setState({redirect: true}))
            .catch(this.context.setError)
    }

    changeImage = ev => {
        this.setState({
            image: ev.target.value,
        })
    }

    render() {
        if(this.state.redirect === true) {
            return (
                <RRender />
            )
        }
        return (
            <form onSubmit={this.handleSubmit} action="submit" className="create-post">
                <input
                    type="title"
                    name="title"
                    className="title"
                    placeholder="EPISODE TITLE"
                />
                <textarea
                    type="text"
                    name="content"
                    className="content"
                    placeholder="EPISODE CONTENT"
                >
                </textarea>
                <h6
                    className="image-label"
                >Please Provide an Image URL or Leave This URL for a random Image</h6>
                <input
                    name="image"
                    className="image"
                    value={this.state.image}
                    onChange={this.changeImage}
                />
                <button
                    type="submit"
                    className="create-post-submit"
                >CREATE AND POST EPISODE</button>
            </form>
        )
    }
}