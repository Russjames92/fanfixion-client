import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import EditForm from '../../components/EditForm/EditForm'
// import userImage from '../../images/user icon.png'
// import utilityIcon from '../../images/three dot icon.png'
import EpisodeContext from '../../contexts/EpisodeContext'
import EpisodeApiService from '../../services/episode-api-service'
import './EditPage.css'
import siteLogo from '../../images/short logo.png'

export default class EditPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = EpisodeContext

    componentDidMount() {
        const { episode_id } = this.props.match.params
        // console.log('from compDidMount in EditPage', episode_id)
        this.context.clearError()
        EpisodeApiService.getEpisode(episode_id)
            .then(this.context.setEpisode)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearEpisode()
    }

    render() {
        const episode = this.context
        const { episodeList } = this.props.location.state
        // console.log('context log in render', this.context)
        // console.log('from EditPage', episode)
        // console.log('from EditPage', episodeList)
        return (
            <>
                <NavBar />
                <div className="EditPage">
                    <div className="post-cont">
                        <div className="post-header">
                            <div className="post-header-left">
                                {/* <img id="post-user-icon" src={userImage} alt="user-pic" /> */}
                                <img id="post-user-icon" src={siteLogo} alt="user-pic" />
                                <div className="header-text">
                                    <h5 id="user">fanFIXion</h5>
                                </div>
                            </div>
                            {/* <div className="post-header-right">
                                <img id="post-action-icon" src={utilityIcon} alt="three-dot-icon" />
                            </div> */}
                        </div>

                        <div className="create-form-cont">
                            <EditForm
                                episode={episode}
                                episodeId={this.props.match.params}
                                episodeList={episodeList}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}