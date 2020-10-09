import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import TokenService from '../../services/token-service'
import abbrevLogo from '../../images/short logo.png'
import searchIcon from '../../images/search icon.png'
import userIcon from '../../images/user icon.png'
import burgerNav from '../../images/hamburger icon.png'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
            <img id="nav-logo" src={abbrevLogo} alt="fanFIXion"/>
            <form id="search-form" action="search">
                <input type="search" name="search" id="search" placeholder="SEARCH"/>
                <button id="search-button"><img id="search-icon" src={searchIcon} alt=""/></button>
            </form>
            <img id="user-icon" src={userIcon} alt="user-pic"/>
            <ul id="nav-links">
                <li id="nav-item">USERNAME</li>
                <hr/>
                <li id="nav-item"><NavLink style ={{ color: '#e1e400' }} to ='/'>HOME</NavLink></li>
                <hr/>
                <li id="nav-item"><NavLink style ={{ color: '#e1e400' }} to ='/create'>CREATE</NavLink></li>
            </ul>
            <img id="second-nav-icon" src={burgerNav} alt="second-nav"/>
        </nav>
        )
    }
}
