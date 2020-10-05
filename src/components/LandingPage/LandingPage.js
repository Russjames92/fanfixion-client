import React, { Component } from "react"
import LoginForm from '../LoginForm'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div class="long-logo">
                    <img id="long-logo" src="images/Long Logo.png" alt="fanFIXion" />
                </div>
                <div class="form-container">
                    <h4>ENTER EMAIL AND PASSWORD TO LOGIN</h4>
                    <LoginForm />
                    <a id="register-link" href="register-page.html">SIGN UP FOR FREE</a>
                </div>
                <div class="footer">
                    <img id="short-logo" src="images/short logo.png" alt="" />
                    <h6>COPYRIGHT 2020 FANFIXION - RC SOLUTIONS</h6>
                </div>
            </div>
        )
    }
}