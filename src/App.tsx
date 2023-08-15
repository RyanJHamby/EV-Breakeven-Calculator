import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalculatorPage from './pages/CalculatorPage';
import MainPage from './pages/MainPage';

export default function App() {
    return (
        <Router>
            <div className="mainPageTitle">
                <h3>Explore Alternative Fuel Source Cars</h3>
            </div>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/emissions-info" element={<CalculatorPage />} />
            </Routes>
        </Router>
    );
}