import { useEffect, useState } from "react";
import getAllCars from "../api";
import { Car, CarProps } from "../components/Car";
import "../style/MainPage.css";
import FilterBar from "../components/FilterBar";
import { displayRandomNCars } from "../utils/customCarsDisplayFunctions";

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
            <FilterBar obj={cars} />
        </div>
    );
};