import React from 'react';
import renderer from 'react-test-renderer';
import { CarProps } from '../../car/Car';
import { FuelNameFilterSection } from './FuelNameFilterSection';

const mockCars: CarProps[] = [
    { fuel_name: 'Gasoline' } as CarProps,
    { fuel_name: 'Diesel' } as CarProps,
    { fuel_name: 'Electric' } as CarProps,
];

describe('FuelNameFilterSection', () => {
    it('handles checkbox change correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <FuelNameFilterSection cars={mockCars} selectedFilters={selectedFilters} onChange={onChange} />
        );

        const checkbox = component.root.findByProps({ value: 'Electric' });
        checkbox.props.onChange({ target: { value: 'Electric' } });

        expect(onChange).toHaveBeenCalledWith({ target: { value: 'Electric' } });
    });
});
