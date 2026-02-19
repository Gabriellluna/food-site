import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
    </Routes>
  );
}
export default App
