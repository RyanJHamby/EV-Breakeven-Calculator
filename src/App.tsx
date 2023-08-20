import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CalculatorPage from './pages/CalculatorPage';
import MainPage from './pages/MainPage';
import React from "react";

export default function App() {
    return (
        <div>
            <div className="mainPageTitle">
                <h3>Explore Alternative Fuel Source Cars</h3>
            </div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/emissions-info" element={<CalculatorPage />} />
                </Routes>
            </Router>
        </div>
    );
}