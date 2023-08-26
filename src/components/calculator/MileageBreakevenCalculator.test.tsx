import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect(...).toBeInTheDocument()

import { MileageBreakevenCalculator } from './MileageBreakevenCalculator';

test('it renders all input fields and the calculate button', () => {
    render(<MileageBreakevenCalculator />);

    expect(screen.getByPlaceholderText('Gas Car MPG')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Electric Car Range (miles)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Gas Price per Gallon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Electricity Price per kWh')).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();
});

test('it calculates the breakeven point when the Calculate button is clicked', () => {
    render(<MileageBreakevenCalculator />);

    fireEvent.change(screen.getByPlaceholderText('Gas Car MPG'), { target: { value: '30' } });
    fireEvent.change(screen.getByPlaceholderText('Electric Car Range (miles)'), { target: { value: '150' } });
    fireEvent.change(screen.getByPlaceholderText('Gas Price per Gallon'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Electricity Price per kWh'), { target: { value: '0.15' } });

    fireEvent.click(screen.getByText('Calculate'));

    expect(screen.getByText('Breakeven Point: 0.6 miles')).toBeInTheDocument();
});
