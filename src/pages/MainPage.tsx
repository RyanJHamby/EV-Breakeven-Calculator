import React, { useEffect, useState } from "react";
import { CarProps } from "../components/car/Car";
import { FilterSidebar } from "../components/sidebar/FilterSidebar";
import { Sortbar } from "../components/sortbar/Sortbar";
import { displayCarsByPage } from '../utils/customCarsDisplayFunctions';
import { sortCarsByDirectionAndLabel } from "../utils/carListSortingFunctions";
import { SearchBar } from "../components/searchbar/Searchbar";
import getAllCars from "../api";
import "../style/MainPage.css";

export interface FilterSidebarProps {
    unfilteredCars: CarProps[];
    onChange: (newFilteredCars: CarProps[]) => void;
}

export interface SortbarProps {
    onSortingLabelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onSortingDirectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MainPage() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [filteredCars, setFilteredCars] = useState<CarProps[]>([]);
    const [sortType, setSortType] = useState<string>("manufacturer_name");
    const [sortDirection, setSortDirection] = useState<string>("descending");
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        getAllCars().then((returnedCars) => { 
            setCars(returnedCars)
        });
    }, []);

    useEffect(() => {
        setFilteredCars(cars);
    }, [cars]);

    useEffect(() => {
        sortCarsByDirectionAndLabel(filteredCars, sortDirection, sortType);
    }, [sortType, sortDirection, filteredCars]);

    const handleFiltersChange = (newFilteredCars: CarProps[]) => {
        setFilteredCars(newFilteredCars);
    }

    const handleSortingLabelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    }

    const handleSortingDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortDirection(event.target.value);
    }

    const handleSearch = (inputSearchTerm: string) => {
        setSearchTerm(inputSearchTerm);
        console.log(searchTerm)
        const filteredCars = cars.filter((car) => {
            return (
                car.manufacturer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.fuel_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredCars(filteredCars);
    }

    return (
        <div>
            <div className="mainPage">
                <FilterSidebar unfilteredCars={cars} onChange={handleFiltersChange} />
                <div className="sortersGridStack">
                    <div className="gridTopBar">
                        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} setSearchTerm={setSearchTerm} />
                        <Sortbar onSortingLabelChange={handleSortingLabelChange} onSortingDirectionChange={handleSortingDirectionChange} />
                    </div>
                    <div className="carsGrid">
                        {displayCarsByPage(filteredCars, 30, 1)}
                    </div>
                </div>
            </div>
        </div>
    );
}
