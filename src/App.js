import './App.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="window">
          <Navbar />
          <Switch>
            <Route path="/pages">
              <div className="empty__route"><h3>Pages</h3></div>
            </Route>
            <Route path="/inbox">
              <div className="empty__route"><h3>Inbox</h3></div>
            </Route>
            <Route path="/file">
              <div className="empty__route"><h3>File Manager</h3></div>
            </Route>
            <Route path="/data">
              <div className="empty__route"><h3>Data List</h3></div>
            </Route>
            <Route path="/support">
              <div className="empty__route"><h3>Support</h3></div>
            </Route>
            <Route path="/logout">
              <div className="empty__route"><h3>Login/Logout Page!</h3></div>
            </Route>
            <Route path="/settings">
              <div className="empty__route"><h3>Settings</h3></div>
            </Route>
            <Route path="/apps">
              <div className="empty__route"><h3>Applications</h3></div>
            </Route>
            <Route path="/docs">
              <div className="empty__route"><h3>Documents</h3></div>
            </Route>
            <Route path="/discover">
              <div className="empty__route"><h3>Discover</h3></div>
            </Route>
            <Route path="/users">
              <div className="empty__route"><h3>Users</h3></div>
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
