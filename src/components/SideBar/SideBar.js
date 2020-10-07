import React, { Component } from 'react'
import userIcon from '../../images/user icon.png'

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul id="sidebar-list">
                    <li id="sidebar-item"><img id="sidebar-user-icon" src={userIcon} alt="user-pic" /></li>
                    <li id="sidebar-item">USERNAME</li>
                </ul>
            </div>
        )
    }
}