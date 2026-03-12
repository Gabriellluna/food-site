import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/cardapio" element={<MenuPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/evento" element={<EventPage />} />
      </Routes>
      <WhatsappButton />
    </>
  );
}
export default App
