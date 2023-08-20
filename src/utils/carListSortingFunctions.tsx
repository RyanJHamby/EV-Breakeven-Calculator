import { CarProps } from "../components/car/Car";

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
