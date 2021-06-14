import './App.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="window">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
