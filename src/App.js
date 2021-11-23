import './App.css';
import Home from './components/Home';
import BandNew from './components/BandNew';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/bandnew" element={ <BandNew /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
