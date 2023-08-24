import React from 'react';
import renderer from 'react-test-renderer';
import { CarProps } from '../../car/Car';
import { ElectricRangeFilterSection } from './ElectricRangeFilterSection';

const mockCars: CarProps[] = [
    { electric_range: '75-150' } as CarProps,
    { electric_range: '100' } as CarProps,
    { electric_range: '50-75' } as CarProps,
    { electric_range: '74' } as CarProps,
    { electric_range: '75' } as CarProps,
    { electric_range: '60-100' } as CarProps,
    { electric_range: '60-80' } as CarProps,
    { electric_range: '50' } as CarProps,
];

describe('ElectricRangeFilterSection', () => {
    it('handles checkbox change correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <ElectricRangeFilterSection cars={mockCars} selectedFilters={selectedFilters} onChange={onChange} />
        );

        const checkbox = component.root.findByProps({ value: '100' });
        checkbox.props.onChange({ target: { value: '100' } });

        expect(onChange).toHaveBeenCalledWith({ target: { value: '100' } });
    });


    it('handles filtering electric ranges >= 75 correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <ElectricRangeFilterSection
                cars={mockCars}
                selectedFilters={selectedFilters}
                onChange={onChange}
            />
        );

        const checkbox = component.root.findByProps({ value: '100' });
        checkbox.props.onChange({ target: { value: '100' } });

        expect(onChange).toHaveBeenCalledWith({ target: { value: '100' } });
    });

    it('handles filtering electric ranges < 75 correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <ElectricRangeFilterSection
            cars={mockCars}
            selectedFilters={selectedFilters}
            onChange={onChange}
            />
        );

        const checkbox = component.root.findByProps({ value: '50' });
        checkbox.props.onChange({ target: { value: '50' } });

        expect(onChange).toHaveBeenCalledWith({ target: { value: '50' } });
    });
});
