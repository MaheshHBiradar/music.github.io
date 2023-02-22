
import './App.css';
import Home from './component/Home';
import Music from './component/Music';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />

        </Routes>
      </Router>
      </>
      );
}

      export default App;
