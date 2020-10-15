import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import userIcon from '../../images/user icon.png'
// import utilitiesIcon from '../../images/three dot icon.png'
// import likeIcon from '../../images/like icon.png'
// import commentIcon from '../../images/comment icon.png'
import './EpisodePost.css'
import EpisodeApiService from '../../services/episode-api-service'
import EpisodeListContext from '../../contexts/EpisodeListContext'
import siteLogo from '../../images/short logo.png'

export default class EpisodePost extends Component {
    state = {
        episode: this.props.episode,
    }

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
                    {/* <!-- Post Header --> */}
                    <div className="post-header">
                        <div className="post-header-left">
                            {/* <img id="post-user-icon" src={userIcon} alt="user-pic" /> */}
                            <img id="post-user-icon" src={siteLogo} alt="user-pic" />
                            <div className="header-text">
                                {/* <h5 id="user">{episode.user.user_name}</h5> */}
                                <h5 id="user">TIME CREATED</h5>
                                <h5 id="post-time">{episode.date_created}</h5>
                            </div>
                        </div>
                        <div className="post-header-right">
                            {/* <img id="post-action-icon" src={utilitiesIcon} alt="three-dot-icon" /> */}
                            <Link
                                style ={{ textDecoration: 'none'}}
                                to={{
                                    pathname: `/edit-page/${episode.id}`,
                                    state: {
                                        episodeList: this.props.episodeList
                                    }
                                }}
                                id="post-action-icon"
                            >EDIT</Link>
                            <br />
                            <div onClick={() => this.handleDeleteClick(episode)} id="post-action-icon">DELETE</div>
                        </div>
                    </div>

                    {/* <!-- Post Image --> */}
                    <div className="post-image" style={{backgroundImage: `url(${episode.image})`}}/>

                    {/* <!-- Post Footer --> */}
                    <div className="post-footer">
                        <div className="post-footer-text">
                            <h3 className="post-title">{episode.title.toUpperCase()}</h3>
                            {/* <h3 className="post-universe"> - UNIVERSE</h3> */}
                        </div>
                        <hr className="footer-break"/>
                        <Link style ={{ textDecoration: 'none'}} to={`/${episode.id}`} className='EpisodePost'>
                            <p className="show-episode">SHOW EPISODE</p>
                        </Link>
                        {/* <ul className="post-interaction">
                            <li className="like"><img id="like-icon" src={likeIcon} alt="" />LIKE</li>
                            <li className="comment"><img id="comment-icon" src={commentIcon} alt="" />COMMENT</li>
                        </ul> */}
                    </div>
                </div >
            </div>
        )
    }
}