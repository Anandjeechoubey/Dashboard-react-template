import React from 'react'
import './Sidebar.css'
import { AccountBoxOutlined, Apps, BookOutlined, ExitToAppOutlined, ExpandMore, FilterNoneOutlined, HelpOutlineOutlined, InboxOutlined, Language, List, NoteOutlined, SettingsOutlined, Speed } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header>
                <img src="/logo.png" />  <h3>Artemis</h3>
            </header>

            <h5>Main</h5>
            <Link className="link" to="/"><button><Speed /> <span>Dashboard</span>  <ExpandMore className="expand__more"/></button></Link>
            <Link className="link" to="/discover"><button><Language /> <span>Discover</span> <ExpandMore className="expand__more"/></button></Link>
            <Link className="link" to="/users"><button><AccountBoxOutlined /> <span>Users</span> <ExpandMore className="expand__more"/></button></Link>
            <Link className="link" to="/docs"><button><BookOutlined /> <span>Documents</span> <ExpandMore className="expand__more"/></button></Link>
            <Link className="link" to="/apps"><button><Apps /> <span>Applications</span> <ExpandMore className="expand__more"/></button></Link>
            <Link className="link" to="/pages"><button><NoteOutlined /> <span>Pages</span> <ExpandMore className="expand__more"/></button></Link>

            <h5>Secondary</h5>
            <Link className="link" to="/support"><button><HelpOutlineOutlined /> <span>Support Center</span></button></Link>
            <Link className="link" to="/inbox"><button><InboxOutlined /> <span>Inbox</span></button></Link>
            <Link className="link" to="/file"><button><FilterNoneOutlined /> <span>File Manager</span></button></Link>
            <Link className="link" to="/data"><button><List /> <span>Data List</span></button></Link>

            <br /><br />
            <Link className="link" to="/settings"><button><SettingsOutlined /> <span>Settings</span></button></Link>
            <Link className="link" to="/logout"><button><ExitToAppOutlined /> <span>Log Out</span></button></Link>
        </div>
    )
}

export default Sidebar
