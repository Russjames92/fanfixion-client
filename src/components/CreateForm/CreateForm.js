import React, { Component } from 'react'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import { withRouter } from 'react-router-dom'

class CreateForm extends Component {
    state = {
        title: "",
        content: "",
        image: "https://loremflickr.com/750/300/city?random=1",
    }

    static contextType = EpisodeListContext

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
            .then(setTimeout(() => this.props.history.push("/home"), 500))
            .catch(this.context.setError)
    }

    handleChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="submit" className="create-post">
                <input
                    type="title"
                    name="title"
                    className="title"
                    placeholder="EPISODE TITLE"
                    onChange={this.handleChange}
                />
                <textarea
                    type="text"
                    name="content"
                    className="content"
                    placeholder="EPISODE CONTENT"
                    onChange={this.handleChange}
                >
                </textarea>
                <h6
                    className="image-label"
                >Please Provide an Image URL or Leave This URL for a random Image</h6>
                <input
                    name="image"
                    className="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    className="create-post-submit"
                >CREATE AND POST EPISODE</button>
            </form>
        )
    }
}

export default withRouter(CreateForm);