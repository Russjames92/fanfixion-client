import React, { Component } from 'react'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeContext from '../../contexts/EpisodeContext'

export default class CreateForm extends Component {
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
            .catch(this.context.setError)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="submit" className="create-post">
                <input type="title" name="title" className="title" placeholder="EPISODE TITLE" />
                <textarea type="text" name="content" className="content" placeholder="EPISODE CONTENT"></textarea>
                <input name="image" className="image" placeholder="IMAGE URL"/>
                <button type="submit" className="create-post-submit">CREATE AND POST EPISODE</button>
            </form>
        )
    }
}