import React, { Component } from "react"

export default class LoginForm extends Component {
    render() {
        return (
            <form class="login-form" action="login">
                <input type="email" name="login-email" id="login-email" placeholder="EMAIL"/>
                <input type="password" name="login-password" id="login-password" placeholder="PASSWORD"/>
                <button type="button" id="login-button"> <a id="button-link-text" href="home-page.html">LOGIN</a></button>
            </form>
        )
    }
}