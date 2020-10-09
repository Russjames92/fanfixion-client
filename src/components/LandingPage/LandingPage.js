import React, { Component } from "react"
import LoginForm from '../LoginForm/LoginForm'
import logo from '../../images/Long Logo.png'
import abbrevLogo from '../../images/short logo.png'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div id="page-body">
                <div className="long-logo">
                    <img id="long-logo" src={logo} alt="fanFIXion" />
                </div>
                <div className="form-container">
                    <h4 id="form-heading">ENTER USERNAME AND PASSWORD TO LOGIN</h4>
                    <LoginForm />
                    <p id="register-link">SIGN UP FOR FREE</p>
                </div>
                <div className="footer">
                    <img id="short-logo" src={abbrevLogo} alt="abbrev-logo"/>
                    <h6 id="small-print">COPYRIGHT 2020 FANFIXION - RC SOLUTIONS</h6>
                </div>
            </div>
        )
    }
}