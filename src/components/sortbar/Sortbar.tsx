import { FC } from "react";
import React from 'react';
import { SortbarProps } from "../../pages/MainPage";
import "../../style/MainPage.css";

export const Sortbar: FC<SortbarProps> = ({ onSortingLabelChange, onSortingDirectionChange }): JSX.Element => {

    const handleSortingDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSortingDirectionChange(event);
    }

    return (
        <div className="sortbar">
            <div className="sortbarTopSection">
                <h3>Sort By:</h3>
                <label className="sortDirectionLabel">
                    <input 
                        type="radio"
                        name="sortOrder"
                        value="descending"
                        defaultChecked
                        onChange={handleSortingDirectionChange}
                    />
                    Descending
                </label>
                <label className="sortDirectionLabel">
                    <input
                        type="radio"
                        name="sortOrder"
                        value="ascending"
                        onChange={handleSortingDirectionChange}
                    />
                    Ascending
                </label>
            </div>
            <div className="sortbarBottomSection">
                <select onChange={onSortingLabelChange}>
                    <option value="">-- Select Sorting Type --</option>
                    <option value="manufacturer_name">Manufacturer</option>
                    <option value="model_name">Model</option>
                    <option value="year">Year</option>
                    <option value="range">Range</option>
                    <option value="fuel_name">Fuel</option>
                </select>
            </div>
        </div>
    );
}
