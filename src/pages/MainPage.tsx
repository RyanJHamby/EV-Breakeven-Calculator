import React, { useState } from "react";
import { Car } from "../components/Car";
import { CarProps } from "../components/Car";


export default function MainPage() {
    const [cars, setCars] = useState<CarProps[]>([]);

    const getCars = () => {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json")
            .then((response) => response.json())
            .then(async (data) => setCars(data.Results))
            .catch((error) => console.log(error));
    };
        
    const carsList = cars.map((car) => {
        return (
            <div>
                <Car 
                    key={car.Make_ID}
                    Make_ID={car.Make_ID}
                    Make_Name={car.Make_Name} 
                    Model_ID={car.Model_ID}
                    Model_Name={car.Make_Name} 
                />
            </div>
        )
    })

    return (
        <div>
            <h3>Welcome to the React Router Tutorial</h3>
            <small>Main Page</small>
            <button onClick={getCars}>Get Cars</button>
            <div>{carsList}</div>
        </div>
    );
};