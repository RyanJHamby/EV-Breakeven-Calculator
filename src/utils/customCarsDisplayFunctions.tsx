import { Car, CarProps } from "../components/car/Car";
import React from 'react';

export const displayCarsByPage = (data: CarProps[], itemsPerPage: number, currentPage: number) => {
    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data to get the cars for the current page
    const carsToShow = data.slice(startIndex, endIndex);

    return (
        <div className="carGrid">
        {carsToShow.map((car, index) => (
            <Car key={index} obj={car} />
        ))}
        </div>
    );
};

export const displayRandomNCars = (cars: CarProps[], numToShow: number) => {
    const randomCars: CarProps[] = [];
    if (cars && cars.length > numToShow) {
        for (let i = 0; i < numToShow; i++) {
            const randomNumber = Math.floor(Math.random() * cars.length);
            const randomCar = cars[randomNumber];
            randomCars.push(randomCar);
        }
        return (
        <div className="carGrid">
            {
                randomCars.map((car, index) => (
                        <Car key={index} obj={car} />
                    )
                )
            }
        </div>
        )
    }
}