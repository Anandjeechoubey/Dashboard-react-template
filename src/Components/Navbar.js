import { ChatBubbleOutlined, ExpandMore, NotificationsOutlined, SearchOutlined, SettingsOutlined } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="search__input">
                <SearchOutlined />
                <input placeholder="Type to Search..."/>
            </div>

            <a href="#"><SettingsOutlined /></a>
            <a href="#"><ChatBubbleOutlined /></a>
            <a href="#"><NotificationsOutlined /></a>

            <div className="user__info">
                <div className="user__name">
                    <h4>Thomas Brown</h4>
                    <span>Developer</span>
                </div>
                <img src="/jake.jpg" />
                <ExpandMore />
            </div>
        </div>
    )
}

export default Navbar
