import { Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/About/About';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
}
export default App
