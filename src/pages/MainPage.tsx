import { useEffect, useState } from "react";
import getAllCars from "../api";
import { CarProps } from "../components/Car";
import { FilterSidebar } from "../components/sidebar/FilterSidebar";
import { Sortbar } from "../components/sortbar/Sortbar";
import { displayFirstNCars } from '../utils/customCarsDisplayFunctions';
import "../style/MainPage.css";
import { sortCarsByDirectionAndLabel } from "../utils/carListSortingFunctions";
import { SearchBar } from "../components/Searchbar";

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

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }
    
    return (
        <div>
            <div className="mainPage">
                <FilterSidebar unfilteredCars={cars} onChange={handleFiltersChange} />
                <div className="sortersGridStack">
                    <SearchBar onSearch={handleSearch} />
                    <Sortbar onSortingLabelChange={handleSortingLabelChange} onSortingDirectionChange={handleSortingDirectionChange} />
                    <ul>
                        {displayFirstNCars(filteredCars, 30)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
