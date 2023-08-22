import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ElectricRangeFilterSection } from './ElectricRangeFilterSection';
import { CarProps } from '../../car/Car';

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
    it('renders electric range filter options correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const { getByText, getByLabelText } = render(
        <ElectricRangeFilterSection
            cars={mockCars}
            selectedFilters={selectedFilters}
            onChange={onChange}
        />
        );

        // Check if electric range filter options are rendered
        expect(getByText('Electric Range')).toBeInTheDocument();
        expect(getByLabelText('100')).toBeInTheDocument();
        expect(getByLabelText('60-90')).toBeInTheDocument();
        expect(getByLabelText('50')).toBeInTheDocument();
    });

    it('handles checkbox change correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <ElectricRangeFilterSection cars={mockCars} selectedFilters={selectedFilters} onChange={onChange} />
        );

        // Find the checkbox element for '100' electric range and simulate a change event
        const checkbox = component.root.findByProps({ value: '100' });
        checkbox.props.onChange({ target: { value: '100' } }); // Pass a mock event object

        // Expect the onChange function to be called with '100'
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

        // Find the checkbox element for '100' electric range and simulate a click event
        const checkbox = component.root.findByProps({ value: '100' });
        checkbox.props.onChange({ target: { value: '100' } });

        // Expect onChange to be called with '100'
        expect(onChange).toHaveBeenCalledWith({ target: { value: '100' } });

        // Check if the electric range '50-75' checkbox is not present
        const notFoundCheckbox = component.root.findByProps({ value: '50' });
        expect(notFoundCheckbox).not.toBeChecked();
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

        // Find the checkbox elements
        const checkboxes = component.root.findAllByType('input');

        // Validate that we have found some checkboxes
        expect(checkboxes.length).toBeGreaterThan(0);

        // Simulate a click event on the checkbox for '50' electric range
        const checkbox50 = checkboxes.find((checkbox) =>
            checkbox.props.value === '50'
        );

        // Check if checkbox50 is defined
        expect(checkbox50).toBeDefined();

        // If checkbox50 is found, simulate a click event
        if (checkbox50) {
            checkbox50.props.onChange({ target: { value: '50' } });
        }

        // Expect onChange to be called with '50'
        expect(onChange).toHaveBeenCalledWith('50');

        // Check if the checkbox for '100' electric range is not present
        const checkbox100 = checkboxes.find((checkbox) =>
            checkbox.props.value === '100'
        );

        // Check if checkbox100 is undefined
        expect(checkbox100).toBeUndefined();
    });
});
