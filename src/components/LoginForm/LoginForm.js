import React, { Component } from "react"
import './LoginForm.css'

export default class LoginForm extends Component {
    render() {
        return (
            <form class="login-form" action="login">
                <input type="email" name="login-email" id="login-email" placeholder="USERNAME"/>
                <input type="password" name="login-password" id="login-password" placeholder="PASSWORD"/>
                <button type="button" id="login-button">LOGIN</button>
            </form>
        )
    }
}