import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CarProps } from '../car/Car';
import { FilterSidebar } from './FilterSidebar';

const mockCars = [
    { manufacturer_name: 'Toyota', model_year: 2020, fuel_name: 'Gasoline', electric_range: '100' } as CarProps,
    { manufacturer_name: 'Honda', model_year: 2021, fuel_name: 'Electric', electric_range: '150' } as CarProps,
    { manufacturer_name: 'Ford', model_year: 2022, fuel_name: 'Gasoline', electric_range: '75' } as CarProps,
];

describe('FilterSidebar', () => {
    it('renders correctly', () => {
        const onChange = jest.fn();
        const { getByText } = render(<FilterSidebar unfilteredCars={mockCars} onChange={onChange} />);
        
        expect(getByText('Manufacturer')).toBeInTheDocument();
        expect(getByText('Year')).toBeInTheDocument();
        expect(getByText('Fuel Name')).toBeInTheDocument();
        expect(getByText('Electric Range')).toBeInTheDocument();
    });

    it('updates selected manufacturer filters', async () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<FilterSidebar unfilteredCars={mockCars} onChange={onChange} />);
        const checkbox = getByLabelText('Toyota');
        
        fireEvent.click(checkbox);

        await new Promise(resolve => setTimeout(resolve, 2000));

        const filteredCars = mockCars.filter(car => car.manufacturer_name === 'Toyota');

        expect(onChange).toHaveBeenCalledWith(expect.objectContaining(filteredCars));
    });

        it('updates selected manufacturer and fuel filters', async () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<FilterSidebar unfilteredCars={mockCars} onChange={onChange} />);
        const manufacturerCheckbox = getByLabelText('Toyota');
        const fuelCheckbox = getByLabelText('Gasoline');

        fireEvent.click(manufacturerCheckbox);
        fireEvent.click(fuelCheckbox);

        await new Promise(resolve => setTimeout(resolve, 2000));

        const filteredCars = mockCars.filter(car => 
            car.manufacturer_name === 'Toyota' && car.fuel_name === 'Gasoline'
        );

        expect(onChange).toHaveBeenCalledWith(expect.objectContaining(filteredCars));
    });
});
