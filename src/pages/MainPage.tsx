import { useEffect, useState } from "react";
import getAllCars from "../api";
import { CarProps } from "../components/Car";
import { FilterSidebar } from "../components/sidebar/FilterSidebar";
import { Sortbar } from "../components/sortbar/Sortbar";
import { displayFirstNCars } from '../utils/customCarsDisplayFunctions';
import "../style/MainPage.css";

export interface FilterSidebarProps {
    unfilteredCars: CarProps[];
    onChange: (newFilteredCars: CarProps[]) => void;
}

export interface SortbarProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function MainPage() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [filteredCars, setFilteredCars] = useState<CarProps[]>([]);
    const [sortType, setSortType] = useState<string>("manufacturer_name");
    const [sortDirection, setSortDirection] = useState<string>("ascending");

    useEffect(() => {
        getAllCars().then((returnedCars) => { 
            setCars(returnedCars)
        });
    }, []);

    useEffect(() => {
        setFilteredCars(cars);
    }, [cars]);

    useEffect(() => {
        if (sortDirection === "descending") {
            filteredCars.sort((a, b) => {
                if (sortType === "manufacturer_name") {
                    return String(a.manufacturer_name).localeCompare(String(b.manufacturer_name));
                } else if (sortType === "year") {
                    return a.model_year - b.model_year;
                } else if (sortType === "fuel_name") {
                    return String(a.fuel_name).localeCompare(String(b.fuel_name));
                } else {
                    return 0;
                }
            })
        } else {
            filteredCars.sort((a, b) => {
                if (sortType === "manufacturer_name") {
                    return String(b.manufacturer_name).localeCompare(String(a.manufacturer_name));
                } else if (sortType === "year") {
                    return b.model_year - a.model_year;
                } else if (sortType === "fuel_name") {
                    return String(b.fuel_name).localeCompare(String(a.fuel_name));
                } else {
                    return 0;
                }
            })
        }
    }, [sortType, filteredCars]);

    const handleFiltersChange = (newFilteredCars: CarProps[]) => {
        setFilteredCars(newFilteredCars);
    }

    const handleSortTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    }
    
    return (
        <div>
            <h1>Explore Alternative Fuel Source Cars</h1>
            <div className="mainPage">
                <FilterSidebar unfilteredCars={cars} onChange={handleFiltersChange} />
                <div className="sortersGridStack">
                    <Sortbar onChange={handleSortTypeChange} />
                    <ul>
                        {displayFirstNCars(filteredCars, 30)}
                    </ul>
                </div>
            </div>
        </div>
    );
};