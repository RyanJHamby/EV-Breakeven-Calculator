import { CarProps } from "../components/Car";

const sortByBrand = (carList: CarProps[], sort: string) => {
    if (sort === "A-Z") {
        return carList.sort((a, b) => {
            return a.manufacturer_name > b.manufacturer_name ? 1 : -1;
        })
    } else if (sort === "Z-A") {
        return carList.sort((a, b) => {
            return a.manufacturer_name < b.manufacturer_name ? 1 : -1;
        })
    } else {
        return carList;
    }
}

const sortByYear = (carList: CarProps[], sort: string) => {
    if (sort === "Newest") {
        return carList.sort((a, b) => {
            return a.model_year < b.model_year ? 1 : -1;
        })
    } else if (sort === "Oldest") {
        return carList.sort((a, b) => {
            return a.model_year > b.model_year ? 1 : -1;
        })
    } else {
        return carList;
    }
}

const sortByMileage = (carList: CarProps[], sort: string) => {
    if (sort === "Most Efficient") {
        return carList.sort((a, b) => {
            return a.electric_range < b.electric_range ? 1 : -1;
        })
    } else if (sort === "Least Efficient") {
        return carList.sort((a, b) => {
            return a.electric_range > b.electric_range ? 1 : -1;
        })
    } else {
        return carList;
    }
}

const sortByMPG = (carList: CarProps[], sort: string) => {
    if (sort === "Most Efficient") {
        return carList.sort((a, b) => {
            return a.electric_range < b.electric_range ? 1 : -1;
        })
    } else if (sort === "Least Efficient") {
        return carList.sort((a, b) => {
            return a.electric_range > b.electric_range ? 1 : -1;
        })
    } else {
        return carList;
    }
}