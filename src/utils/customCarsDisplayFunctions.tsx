import { Car, CarProps } from "../components/Car";

export const displayFirstNCars = (data: CarProps[], numToShow: number) => {
    const carsToShow = data.slice(0, numToShow);
    return (
        <div className="carGrid">
            {
                carsToShow.map((car, index) => (
                        <Car key={index} obj={car} />
                    )
                )
            }
        </div>
    )      
}

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