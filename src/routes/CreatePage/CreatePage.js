import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CreateForm from '../../components/CreateForm/CreateForm'
// import userImage from '../../images/user icon.png'
// import utilityIcon from '../../images/three dot icon.png'
import './CreatePage.css'
import siteLogo from '../../images/short logo.png'

export default class CreatePage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="CreatePage">
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
                            <CreateForm />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}