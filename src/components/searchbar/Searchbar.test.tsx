import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom for expect assertions
import { SearchBar } from './Searchbar';

const onSearchMock = jest.fn();
const setSearchTermMock = jest.fn();

describe('SearchBar component', () => {
    it('renders without errors', () => {
        const { getByPlaceholderText } = render(
            <SearchBar searchTerm="" onSearch={onSearchMock} setSearchTerm={setSearchTermMock} />
        );
        
        const inputElement = getByPlaceholderText('Search...');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onSearch when the button is clicked', () => {
        const { getByText } = render(
            <SearchBar searchTerm="" onSearch={onSearchMock} setSearchTerm={setSearchTermMock} />
        );

        const searchButton = getByText('Search');
        fireEvent.click(searchButton);

        expect(onSearchMock).toHaveBeenCalled();
    });

    it('updates the searchTerm when the input value changes', () => {
        const { getByPlaceholderText } = render(
            <SearchBar searchTerm="" onSearch={onSearchMock} setSearchTerm={setSearchTermMock} />
        );

        const inputElement = getByPlaceholderText('Search...');
        fireEvent.change(inputElement, { target: { value: 'test' } });

        expect(setSearchTermMock).toHaveBeenCalledWith('test');
    });

    it('changes button background color when clicked', () => {
        const { getByText } = render(
            <SearchBar searchTerm="" onSearch={onSearchMock} setSearchTerm={setSearchTermMock} />
        );

        const searchButton = getByText('Search');
        fireEvent.click(searchButton);

        expect(searchButton.style.backgroundColor).toBe('rgb(51, 51, 51)');
    });
});
