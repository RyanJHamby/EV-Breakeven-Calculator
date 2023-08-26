import React, { FC, useState, useEffect } from "react";
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
            setSearchTerm(searchTerm);
            if (searchTerm) {
                onSearch(searchTerm);
            }
        }, 500);
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
    };

    const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
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
                style={{ backgroundColor: isClicked ? '#0022FF' : '#66B3E6' }}
            >
                Search
            </button>
        </div>
    );
};
