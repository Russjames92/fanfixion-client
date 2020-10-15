import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EpisodePost.css'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import siteLogo from '../../images/short logo.png'

export default class EpisodePost extends Component {

    static contextType = EpisodeListContext

    handleDeleteClick(episode) {
        console.log(episode)
        if (window.confirm(`Are you sure you want to Delete ${episode.title}?`)) {
            EpisodeApiService.deleteEpisode(episode.id)
            .then(this.context.removeEpisode(episode.id))
            .catch((error) => this.context.seterror(error))
        }
    }

    render() {
        const { episode } = this.props
        return (
            <div id="home-body">
                <div className="post-cont">
                    <div className="post-header">
                        <div className="post-header-left">
                            <img id="post-user-icon" src={siteLogo} alt="user-pic" />
                            <div className="header-text">
                                <h5 id="user">TIME CREATED</h5>
                                <h5 id="post-time">{episode.date_created}</h5>
                            </div>
                        </div>
                        <div className="post-header-right">
                            <Link
                                style ={{ textDecoration: 'none'}}
                                to={{
                                    pathname: `/edit-page/${episode.id}`,
                                    state: {
                                        episodeList: this.context.episodeList
                                    }
                                }}
                                id="post-action-icon"
                            >EDIT</Link>
                            <br />
                            <div onClick={() => this.handleDeleteClick(episode)} id="post-action-icon">DELETE</div>
                        </div>
                    </div>
                    <div className="post-image" style={{backgroundImage: `url(${episode.image})`}}/>
                    <div className="post-footer">
                        <div className="post-footer-text">
                            <h3 className="post-title">{episode.title.toUpperCase()}</h3>
                        </div>
                        <hr className="footer-break"/>
                        <Link style ={{ textDecoration: 'none'}} to={`/${episode.id}`} className='EpisodePost'>
                            <p className="show-episode">SHOW EPISODE</p>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
}