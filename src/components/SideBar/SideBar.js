import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div class="sidebar">
                <ul id="sidebar-list">
                    <li id="sidebar-item"><img id="sidebar-user-icon" src="images/user icon.png" alt="user-pic" /></li>
                    <li id="sidebar-item">USERNAME</li>
                </ul>
            </div>
        )
    }
}