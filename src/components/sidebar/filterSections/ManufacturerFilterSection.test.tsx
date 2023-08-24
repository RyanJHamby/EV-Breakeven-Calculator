import React from 'react';
import renderer from 'react-test-renderer';
import { CarProps } from '../../car/Car';
import { ManufacturerFilterSection } from './ManufacturerFilterSection';

const mockCars: CarProps[] = [
    { manufacturer_name: 'Toyota' } as CarProps,
    { manufacturer_name: 'Honda' } as CarProps,
    { manufacturer_name: 'Ford' } as CarProps,
];

describe('ManufacturerFilterSection', () => {
    it('handles checkbox change correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <ManufacturerFilterSection cars={mockCars} selectedFilters={selectedFilters} onChange={onChange} />
        );

        const checkbox = component.root.findByProps({ value: 'Ford' });
        checkbox.props.onChange({ target: { value: 'Ford' } });

        expect(onChange).toHaveBeenCalledWith({ target: { value: 'Ford' } });
    });
});
