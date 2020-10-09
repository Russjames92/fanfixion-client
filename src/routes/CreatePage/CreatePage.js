import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CreateForm from '../../components/CreateForm/CreateForm'
import userImage from '../../images/user icon.png'
import utilityIcon from '../../images/three dot icon.png'
import './CreatePage.css'

export default class CreatePage extends Component {
    render() {
        return (
            <div className="CreatePage">
                <NavBar />
                <div className="post-cont">
                    <div className="post-header">
                        <div className="post-header-left">
                            <img id="post-user-icon" src={userImage} alt="user-pic" />
                            <div className="header-text">
                                <h5 id="user">USERNAME</h5>
                            </div>
                        </div>
                        <div className="post-header-right">
                            <img id="post-action-icon" src={utilityIcon} alt="three-dot-icon" />
                        </div>
                    </div>

                    <div className="create-form-cont">
                        <CreateForm />
                    </div>
                </div>
            </div>
        )
    }
}