import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import abbrevLogo from '../../images/short logo.png'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
            <Link to='/'>
                <img id="nav-logo" href="" src={abbrevLogo} alt="fanFIXion"/>
            </Link>
            <hr className="header-break"/>
            <ul id="nav-links">
                <li id="nav-item"><NavLink style ={{ textDecoration: 'none', color: '#e1e400' }} to ='/home'>HOME</NavLink></li>
                <li id="nav-item"><NavLink style ={{ textDecoration: 'none', color: '#e1e400' }} to ='/create'>CREATE</NavLink></li>
            </ul>
        </nav>
        )
    }
}
