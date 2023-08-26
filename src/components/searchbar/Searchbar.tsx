import { FC, useState } from "react";
import React from 'react';
import "../../style/MainPage.css";

interface SearchBarProps {
    searchTerm: string;
    onSearch: (inputSearchTerm: string) => void;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearch, setSearchTerm }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchTerm(event.currentTarget.value);
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
