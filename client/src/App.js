import './App.css';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Login from './Front/Pages/login';
import Menu from './Front/Menu/Menu';
import Intro from './Front/World/Scenes/Intro/Intro';
import Navbar from './Front/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar className="navbar"/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Menu />} />
          <Route path="/game" element={<Intro />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
