import React, { Component } from 'react'

export default class EpisodePost extends Component {
    render() {
        return (
            <div class="post-cont">
                {/* <!-- Post Header --> */}
                <div class="post-header">
                    <div class="post-header-left">
                        <img id="post-user-icon" src="../../../images/user icon.png" alt="user-pic"/>
                        <div class="header-text">
                            <h5 id="user">USERNAME</h5>
                            <h5 id="post-time">TIME POSTED</h5>
                        </div>
                    </div>
                    <div class="post-header-right">
                        <img id="post-action-icon" src="images/three dot icon.png" alt="three-dot-icon"/>
                    </div>
                </div>

                {/* <!-- Post Image --> */}
                <div class="post-image">
                    <img src="" alt="post-pic"/>
                </div>

                {/* <!-- Post Footer --> */}
                <div class="post-footer">
                    <div class="post-footer-text">
                        <h3 class="post-title">EPISODE TITLE</h3>
                        <h3 class="post-universe"> - UNIVERSE</h3>
                    </div>
                    <p class="show-episode">SHOW EPISODE</p>
                    <ul class="post-interaction">
                        <li class="like"><img id="like-icon" src="../../../images/like icon.png" alt=""/>LIKE</li>
                        <li class="comment"><img id="comment-icon" src="../../../images/comment icon.png" alt=""/>COMMENT</li>
                    </ul>
                </div>
            </div>
        )
    }
}