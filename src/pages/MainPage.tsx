import React, { useEffect, useState } from "react";
import { CarProps } from "../components/car/Car";
import { CarsPagination } from "../components/paginationbar/PaginationBar";
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
    const maxCarResultsPerPage = 30;
    const [cars, setCars] = useState<CarProps[]>([]);
    const [filteredCars, setFilteredCars] = useState<CarProps[]>([]);
    const [sortType, setSortType] = useState<string>("manufacturer_name");
    const [sortDirection, setSortDirection] = useState<string>("descending");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [carResultsPageNumber, setCarResultsPageNumber] = useState<number>(1);

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

    const handlePaginationChange = (pageNum: number) => {
        setCarResultsPageNumber(pageNum);
    }

    const handleSearch = (inputSearchTerm: string) => {
        setSearchTerm(inputSearchTerm);
        const filteredCars = cars.filter((car) => {
            if (!searchTerm) {
                return true;
            }
            return (
                car.manufacturer_name && car.manufacturer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model && car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.fuel_name && car.fuel_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model_year && car.model_year.toString().includes(searchTerm)
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
                        {displayCarsByPage(filteredCars, maxCarResultsPerPage, carResultsPageNumber)}
                    </div>
                    <CarsPagination cars={filteredCars} carsPerPage={maxCarResultsPerPage} currentPage={carResultsPageNumber} onPageChange={handlePaginationChange} />
                </div>
            </div>
        </div>
    );
}
