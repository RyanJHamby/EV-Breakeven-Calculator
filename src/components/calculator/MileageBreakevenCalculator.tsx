import React, { useState } from 'react';
import '../../style/CalculatorPage.css';

export const MileageBreakevenCalculator: React.FC = () => {
    const [gasMpg, setGasMpg] = useState<number | ''>('');
    const [electricRange, setElectricRange] = useState<number | ''>('');
    const [gasPrice, setGasPrice] = useState<number | ''>('');
    const [electricityPrice, setElectricityPrice] = useState<number | ''>('');
    const [breakevenMiles, setBreakevenMiles] = useState<number | ''>('');

    const calculateBreakeven = () => {
    if (typeof gasMpg === 'number' && typeof electricRange === 'number' && typeof gasPrice === 'number' && typeof electricityPrice === 'number') {
        const electricMpgEquivalent = electricRange / electricityPrice; // Simplified MPGe calculation
        const calculatedBreakevenMiles = (gasMpg / electricMpgEquivalent) * (gasPrice / electricityPrice);
            setBreakevenMiles(Number(calculatedBreakevenMiles.toFixed(2)));
        }
    };

    return (
        <div className="calculator-container">
            <h2>Breakeven Calculator</h2>
                <div className="input-container">
                    <input
                        type="number"
                        placeholder="Gas Car MPG"
                        value={gasMpg}
                        onChange={(e) => setGasMpg(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Electric Car Range (miles)"
                        value={electricRange}
                        onChange={(e) => setElectricRange(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Gas Price per Gallon"
                        value={gasPrice}
                        onChange={(e) => setGasPrice(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Electricity Price per kWh"
                        value={electricityPrice}
                        onChange={(e) => setElectricityPrice(Number(e.target.value))}
                    />
                </div>
            <button onClick={calculateBreakeven}>Calculate</button>
            {breakevenMiles !== '' && (
                <p className="breakeven-result">Breakeven Point: {breakevenMiles} miles</p>
            )}
        </div>
    );
};
