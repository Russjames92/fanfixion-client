import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import EpisodePost from '../EpisodePost/EpisodePost'

export default class EpisodeFeed extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SideBar />
                <EpisodePost />
            </div>
        )
    }
}