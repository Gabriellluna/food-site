import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}
export default App
