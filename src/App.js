import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import PokemonDetails from './components/PokemonDetails.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="details/:name" element={<PokemonDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
