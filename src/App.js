import './App.css';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Login from './Front/Pages/login';

function App() {
  return (
    <Router>
      <div>
        <nav>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
