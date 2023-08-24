import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sortbar } from './Sortbar';

describe('Sortbar', () => {
    it('renders correctly', () => {
        const onSortingLabelChange = jest.fn();
        const onSortingDirectionChange = jest.fn();
        const { getByText } = render(
            <Sortbar
                onSortingLabelChange={onSortingLabelChange}
                onSortingDirectionChange={onSortingDirectionChange}
            />
        );

        expect(getByText('Sort By:')).toBeInTheDocument();
        expect(getByText('Descending')).toBeInTheDocument();
        expect(getByText('Ascending')).toBeInTheDocument();
        expect(getByText('-- Select Sorting Type --')).toBeInTheDocument();
    });
});