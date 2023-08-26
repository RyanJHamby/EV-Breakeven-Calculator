import React, { FC } from "react";
import { CarProps } from "./CarProps"; // Import your CarProps type

interface CarsPaginationProps {
    cars: CarProps[];
    carsPerPage: number;
    onPageChange: (page: number) => void;
}

const CarsPagination: FC<CarsPaginationProps> = ({ cars, carsPerPage, onPageChange }) => {

    const totalPages = Math.ceil(cars.length / carsPerPage);

    const handlePageClick = (pageNum: number) => {
        onPageChange(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
        <ul>
            {pageNumbers.map((page) => (
            <li
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => handlePageClick(page)}
            >
                {page}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default CarsPagination;