import React, { FC } from "react";
import { CarProps } from "../car/Car";

interface CarsPaginationProps {
    cars: CarProps[];
    carsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const CarsPagination: FC<CarsPaginationProps> = ({ cars, carsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(cars.length / carsPerPage);
    const pageNumbers = [];
    
    // Calculate the sliding window range of page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    // Adjust the startPage if the window is less than 5 pages
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNum: number) => {
        onPageChange(pageNum);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
        onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
        <button
            className="prev-next"
            onClick={handlePrevClick}
            disabled={currentPage === 1}
        >
            {"< Prev"}
        </button>
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
        <button
            className="prev-next"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
        >
            {"Next >"}
        </button>
        </div>
    );
};
