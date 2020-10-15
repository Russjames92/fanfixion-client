import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CreateForm from '../../components/CreateForm/CreateForm'
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
                                <img id="post-user-icon" src={siteLogo} alt="user-pic" />
                            </div>
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