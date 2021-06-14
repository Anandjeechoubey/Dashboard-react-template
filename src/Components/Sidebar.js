import React from 'react'
import './Sidebar.css'
import { AccountBoxOutlined, Apps, BookOutlined, ExitToAppOutlined, ExpandMore, FilterNoneOutlined, HelpOutlineOutlined, InboxOutlined, Language, List, NoteOutlined, SettingsOutlined, Speed } from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header>
                <img src="/logo.png" />  <h3>Artemis</h3>
            </header>

            <h5>Main</h5>
            <button><Speed /> <span>Dashboard</span>  <ExpandMore className="expand__more"/></button>
            <button><Language /> <span>Discover</span> <ExpandMore className="expand__more"/></button>
            <button><AccountBoxOutlined /> <span>Users</span> <ExpandMore className="expand__more"/></button>
            <button><BookOutlined /> <span>Documents</span> <ExpandMore className="expand__more"/></button>
            <button><Apps /> <span>Applications</span> <ExpandMore className="expand__more"/></button>
            <button><NoteOutlined /> <span>Pages</span> <ExpandMore className="expand__more"/></button>

            <h5>Secondary</h5>
            <button><HelpOutlineOutlined /> <span>Support Center</span></button>
            <button><InboxOutlined /> <span>Inbox</span></button>
            <button><FilterNoneOutlined /> <span>File Manager</span></button>
            <button><List /> <span>Data List</span></button>

            <br /><br />
            <button><SettingsOutlined /> <span>Settings</span></button>
            <button><ExitToAppOutlined /> <span>Log Out</span></button>
        </div>
    )
}

export default Sidebar
