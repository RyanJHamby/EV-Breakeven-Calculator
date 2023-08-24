import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { CarProps } from '../../car/Car';
import { YearFilterSection } from './YearFilterSection';

const mockCars: CarProps[] = [
    { model_year: 2020 } as CarProps,
    { model_year: 2021 } as CarProps,
    { model_year: 2022 } as CarProps,
];

describe('YearFilterSection', () => {
    it('handles checkbox change correctly', () => {
        const selectedFilters: string[] = [];
        const onChange = jest.fn();

        const component = renderer.create(
            <YearFilterSection cars={mockCars} selectedFilters={selectedFilters} onChange={onChange} />
        );

        const checkbox = component.root.findByProps({ value: '2022' });
        act(() => {
        checkbox.props.onChange({ target: { value: '2022' } });
        });

        expect(onChange).toHaveBeenCalledWith({ target: { value: '2022' } });
    });
});
