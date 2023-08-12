import { FC } from "react";
import { SortbarProps } from "../../pages/MainPage";
import "../../style/MainPage.css";

export const Sortbar: FC<SortbarProps> = ({ onChange }): JSX.Element => {
    return (
        <div className="sortbar">
            <h3>Sort By:</h3>
            <select className="sortSelect">
                <option value="manufacturer_name">Manufacturer</option>
                <option value="model_name">Model</option>
                <option value="year">Year</option>
                <option value="range">Range</option>
                <option value="fuel_name">Fuel</option>
            </select>
        </div>
    );
}
