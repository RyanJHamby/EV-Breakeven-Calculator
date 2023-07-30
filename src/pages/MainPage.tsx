import React, { useEffect, useState } from "react";
import { Car } from "../components/Car";
import { CarProps } from "../components/Car";
import axios from "axios";


export default function MainPage() {
    const [cars, setCars] = useState<CarProps[]>([]);

    const getCars = async () => {
        axios.get("https://developer.nrel.gov/api/vehicles/v1/vehicles.json?limit=1&api_key=DEMO_KEY").then((response) => {
            setCars(response.data.result);
            console.log(response.data.result)
        });
    }

    const displayFirstNCars = (data: CarProps[], numToShow: number) => {
        const carsToShow = data.slice(0, numToShow);
        return (
            <div>
                {
                    carsToShow.map((car, index) => (
                            <Car key={index} obj={car} />
                        )
                    )
                }
            </div>
        )      
    }

    useEffect(() => {
        getCars();
    }, []);

    return (
        <div>
            <h3>Welcome to the React Router Tutorial</h3>
            <small>Main Page</small>
            <div>{displayFirstNCars(cars, 10)}</div>
        </div>
    );
};