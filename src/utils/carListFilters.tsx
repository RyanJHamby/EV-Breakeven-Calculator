import { CarProps } from "../components/Car"

const filterByBrand = (carList: CarProps[], filter: string) => {
    if (filter === "") {
        return carList;
    } else {
        return carList.filter((car) => {
            return car.manufacturer_name.toLowerCase().includes(filter.toLowerCase());
        })
    }
}

const filterByYearRange = (carList: CarProps[], filter: string) => {
    if (filter === "") {
        return carList;
    } else {
        const yearRange = filter.split("-");
        const minYear = Number(yearRange[0]);
        const maxYear = Number(yearRange[1]);
        return carList.filter((car) => {
            return car.model_year >= minYear && car.model_year <= maxYear;
        })
    }
}

const filterByFuelType = (carList: CarProps[], filter: string) => {
    if (filter === "") {
        return carList;
    } else {
        return carList.filter((car) => {
            return car.fuel_name.toLowerCase().includes(filter.toLowerCase());
        })
    }
}