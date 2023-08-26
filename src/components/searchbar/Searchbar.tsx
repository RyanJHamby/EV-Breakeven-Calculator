import { FC, useState, useEffect } from "react";
import React from 'react';
import "../../style/MainPage.css";

interface SearchBarProps {
    searchTerm: string;
    onSearch: (inputSearchTerm: string) => void;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearch, setSearchTerm }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            // Update the debounced search term after the specified delay
            setSearchTerm(searchTerm);
            if (searchTerm) {
                onSearch(searchTerm);
            }
        }, 500); // Adjust the debounce delay as needed (2 seconds in this case)
        // Clear the timeout if the component unmounts or the search term changes
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    // useEffect(() => {
    //     // Perform the search when the debounced search term changes
    //     onSearch(searchTerm);
    // }, [searchTerm, onSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
    };

    const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Trigger a search when Enter is pressed
            onSearch(searchTerm);
        }
    };

    const handleButtonClick = () => {
        setIsClicked(true);
        onSearch(searchTerm);
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyPress}
            />
            <button 
                onClick={handleButtonClick}
                style={{ backgroundColor: isClicked ? '#333' : '#333' }}
            >
                Search
            </button>
        </div>
    );
};
