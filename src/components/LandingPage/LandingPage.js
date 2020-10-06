import React, { Component } from "react"
import LoginForm from '../LoginForm/LoginForm'
import logo from '../../images/Long Logo.png'
import abbrevLogo from '../../images/short logo.png'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div class="long-logo">
                    <img id="long-logo" src={logo} alt="fanFIXion" />
                </div>
                <div class="form-container">
                    <h4>ENTER USERNAME AND PASSWORD TO LOGIN</h4>
                    <LoginForm />
                    <p id="register-link">SIGN UP FOR FREE</p>
                </div>
                <div class="footer">
                    <img id="short-logo" src={abbrevLogo} alt="abbrev-logo"/>
                    <h6>COPYRIGHT 2020 FANFIXION - RC SOLUTIONS</h6>
                </div>
            </div>
        )
    }
}