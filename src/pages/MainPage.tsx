import { useEffect, useState } from "react";
import getAllCars from "../api";
import { CarProps } from "../components/Car";
import { FilterSidebar } from "../components/sidebar/FilterSidebar";
import "../style/MainPage.css";

export default function MainPage() {
    const [cars, setCars] = useState<CarProps[]>([]);

    useEffect(() => {
        getAllCars().then((returnedCars) => { 
            setCars(returnedCars);
        })
    }, []);
    

    return (
        <div>
            <h1>Explore Alternative Fuel Source Cars</h1>
            <FilterSidebar obj={cars} />
        </div>
    );
};