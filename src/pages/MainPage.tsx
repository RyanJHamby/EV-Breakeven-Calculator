import { useEffect, useState } from "react";
import getAllCars from "../api";
import { CarProps } from "../components/Car";
import { FilterSidebar } from "../components/sidebar/FilterSidebar";
import { displayFirstNCars } from '../utils/customCarsDisplayFunctions';
import "../style/MainPage.css";

export interface FilterSidebarProps {
    unfilteredCars: CarProps[];
    onChange: (newFilteredCars: CarProps[]) => void;
}

export default function MainPage() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [filteredCars, setFilteredCars] = useState<CarProps[]>([]);

    useEffect(() => {
        getAllCars().then((returnedCars) => { 
            setCars(returnedCars)
        });
    }, []);

    useEffect(() => {
        setFilteredCars(cars);
    }, [cars]);

    const handleFiltersChange = (newFilteredCars: CarProps[]) => {
        setFilteredCars(newFilteredCars);
    }
    
    return (
        <div>
            <h1>Explore Alternative Fuel Source Cars</h1>
            <div className="mainPage">
                <FilterSidebar unfilteredCars={cars} onChange={handleFiltersChange} />
                <ul>
                    {displayFirstNCars(filteredCars, 30)}
                </ul>
            </div>
        </div>
    );
};