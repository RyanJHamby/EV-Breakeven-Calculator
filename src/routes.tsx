import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CalculatorPage from './pages/CalculatorPage';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/emissions-info" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}