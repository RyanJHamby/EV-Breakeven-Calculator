import { CarProps } from "../components/Car";

export const sortCarsByDirectionAndLabel = (filteredCars: CarProps[], sortingDirection: string, sortingLabel: string) => {
    const compareFunction = (a: CarProps, b: CarProps) => {
        const aValue = a[sortingLabel as keyof CarProps];
        const bValue = b[sortingLabel as keyof CarProps];

        if (sortingLabel === "year") {
            return (sortingDirection === "descending") ? Number(bValue) - Number(aValue) : Number(aValue) - Number(bValue);
        } else {
            const comparison = String(aValue).localeCompare(String(bValue));
            return (sortingDirection === "descending") ? -comparison : comparison;
        }
    };

    filteredCars.sort(compareFunction);
};

// export const sortCarsByDirectionAndLabel = (filteredCars: CarProps[], sortingDirection: string, sortingLabel: string) => {
//     if (sortingDirection === "descending") {
//         filteredCars.sort((a, b) => {
//             if (sortingLabel === "manufacturer_name") {
//                 return String(a.manufacturer_name).localeCompare(String(b.manufacturer_name));
//             } else if (sortingLabel === "year") {
//                 return a.model_year - b.model_year;
//             } else if (sortingLabel === "fuel_name") {
//                 return String(a.fuel_name).localeCompare(String(b.fuel_name));
//             } else {
//                 return 0;
//             }
//         })
//     } else {
//         filteredCars.sort((a, b) => {
//             if (sortingLabel === "manufacturer_name") {
//                 return String(b.manufacturer_name).localeCompare(String(a.manufacturer_name));
//             } else if (sortingLabel === "year") {
//                 return b.model_year - a.model_year;
//             } else if (sortingLabel === "fuel_name") {
//                 return String(b.fuel_name).localeCompare(String(a.fuel_name));
//             } else {
//                 return 0;
//             }
//         })
//     }
// }
