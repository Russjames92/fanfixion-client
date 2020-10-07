import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../../images/user icon.png'
import utilitiesIcon from '../../images/three dot icon.png'
import likeIcon from '../../images/like icon.png'
import commentIcon from '../../images/comment icon.png'

export default class EpisodePost extends Component {
    render() {
        const { episode } = this.props
        return (
            <Link to={`/episode/${episode.id}`} className='EpisodePost'>
                <div className="post-cont">
                {/* <!-- Post Header --> */}
                <div className="post-header">
                    <div className="post-header-left">
                        <img id="post-user-icon" src={userIcon} alt="user-pic"/>
                        <div className="header-text">
                            <h5 id="user">USERNAME</h5>
                            <h5 id="post-time">TIME POSTED</h5>
                        </div>
                    </div>
                    <div className="post-header-right">
                        <img id="post-action-icon" src={utilitiesIcon} alt="three-dot-icon"/>
                    </div>
                </div>

                {/* <!-- Post Image --> */}
                <div className="post-image">
                    <img src={`url(${episode.image})`} alt="post-pic"/>
                </div>

                {/* <!-- Post Footer --> */}
                <div className="post-footer">
                    <div className="post-footer-text">
                        <h3 className="post-title">{episode.title.toUpperCase()}</h3>
                        <h3 className="post-universe"> - UNIVERSE</h3>
                    </div>
                    <p className="show-episode">{episode.content}</p>
                    <ul className="post-interaction">
                        <li className="like"><img id="like-icon" src={likeIcon} alt=""/>LIKE</li>
                        <li className="comment"><img id="comment-icon" src={commentIcon} alt=""/>COMMENT</li>
                    </ul>
                </div>
            </div>
            </Link>
        )
    }
}