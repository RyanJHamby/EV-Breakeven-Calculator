import { FC, useState } from "react";
import React from 'react';
import "../../style/MainPage.css";

interface SearchBarProps {
    searchTerm: string;
    onSearch: () => void;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearch, setSearchTerm }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleSearch = () => {
        onSearch();
        handleButtonClick();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleButtonClick = () => {
        setIsClicked(true);
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
            />
            <button 
                onClick={handleSearch}
                style={{ backgroundColor: isClicked ? '#333' : '#333' }}
            >
                Search
            </button>
        </div>
    );
};
