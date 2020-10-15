import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import LoginForm from '../LoginForm/LoginForm'
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
                <div className="welcome-container">
                    <h4 className="welcome-header">WELCOME TO fanFixion!</h4>
                    <p className="welcome-body">
                        Fiction stories have captivated society as long as language has existed.
                        With favorite authors and genres, people have found a place in fiction to escape, and for a few minutes or hours, live
                        in another world.
                        <br/>
                        fanFIXion will take that feeling to the next level for you, as now you'll be able to create whole universes
                        that involve your favorite characters from any book, movie, cartoon, or TV show. Not only that, but you can get your friends in
                        on the action.
                    </p>
                    <button className="site-entry"><Link style={{ textDecoration: 'none', color: 'black' }} to='/home'>GET STARTED</Link></button>
                </div>
                {/* <div className="form-container">
                    <h4 id="form-heading">ENTER USERNAME AND PASSWORD TO LOGIN</h4>
                    <LoginForm />
                    <p id="register-link">SIGN UP FOR FREE</p>
                </div> */}
                <div className="footer">
                    <img id="short-logo" src={abbrevLogo} alt="abbrev-logo" />
                    <h6 id="small-print">COPYRIGHT 2020 FANFIXION - RC SOLUTIONS</h6>
                </div>
            </div>
        )
    }
}