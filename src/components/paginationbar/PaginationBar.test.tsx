import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CarProps } from '../car/Car';

import { CarsPagination } from './PaginationBar';

// Mock the onPageChange function
const mockOnPageChange = jest.fn();

const mockCars: CarProps[] = [
    { electric_range: '75-150' } as CarProps,
    { electric_range: '100' } as CarProps,
    { electric_range: '50-75' } as CarProps,
    { electric_range: '74' } as CarProps,
    { electric_range: '75' } as CarProps,
    { electric_range: '60-100' } as CarProps,
    { electric_range: '60-80' } as CarProps,
    { electric_range: '50' } as CarProps,
    { electric_range: '75' } as CarProps,
    { electric_range: '85' } as CarProps,
];

// Define test data
const carsPerPage = 3;
const currentPage = 1;

test('it renders page numbers and "Prev" and "Next" buttons', () => {
    const { container } = render(
        <CarsPagination
        cars={mockCars}
        carsPerPage={carsPerPage}
        currentPage={currentPage}
        onPageChange={mockOnPageChange}
        />
    );

    for (let i = 1; i <= 4; i++) {
        expect(container).toHaveTextContent(i.toString());
    }

    expect(container).toHaveTextContent('< Prev');
    expect(container).toHaveTextContent('Next >');
    });

    test('it calls onPageChange when a page number is clicked', () => {
        const { getByText } = render(
            <CarsPagination
            cars={mockCars}
            carsPerPage={carsPerPage}
            currentPage={currentPage}
            onPageChange={mockOnPageChange}
            />
        );

        fireEvent.click(getByText('2'));

        expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    test('it calls onPageChange when "Prev" and "Next" buttons are clicked', () => {
        const { getByText } = render(
            <CarsPagination
            cars={mockCars}
            carsPerPage={carsPerPage}
            currentPage={currentPage}
            onPageChange={mockOnPageChange}
            />
        );

        fireEvent.click(getByText('Next >'));

        expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    test('it disables "Prev" and "Next" buttons at the beginning and end', () => {
    const { getByText, rerender } = render(
        <CarsPagination
        cars={mockCars}
        carsPerPage={carsPerPage}
        currentPage={1}
        onPageChange={mockOnPageChange}
        />
    );

    expect(getByText('< Prev')).toBeDisabled();

    expect(getByText('Next >')).not.toBeDisabled();

    rerender(
        <CarsPagination
        cars={mockCars}
        carsPerPage={carsPerPage}
        currentPage={4}
        onPageChange={mockOnPageChange}
        />
    );

    expect(getByText('< Prev')).not.toBeDisabled();

    expect(getByText('Next >')).toBeDisabled();
});
