import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
            <img id="nav-logo" src="../../../images/short logo.png" alt="fanFIXion"/>
            <form id="search-form" action="search">
                <input type="search" name="search" id="search" placeholder="SEARCH"/>
                <button id="search-button"><img id="search-icon" src="../../../images/search icon.png" alt=""/></button>
            </form>
            <img id="user-icon" src="../../../images/user icon.png" alt="user-pic"/>
            <ul id="nav-links">
                <li id="nav-item">USERNAME</li>
                <hr/>
                <li id="nav-item"><a id="nav-link" href="home-page.html">HOME</a></li>
                <hr/>
                <li id="nav-item"><a id="nav-link" href="create-page.html">CREATE</a></li>
            </ul>
            <img id="second-nav-icon" src="../../../images/hamburger icon.png" alt="second-nav"/>
        </nav>
        )
    }
}