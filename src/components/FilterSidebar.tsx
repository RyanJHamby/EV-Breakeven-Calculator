import React, { useState, FC } from 'react';
import { CarProps } from './Car';
import { displayFirstNCars } from '../utils/customCarsDisplayFunctions';
  
export const FilterSidebar: FC<{ obj: CarProps[] }> = (props): JSX.Element => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filterOptions: string[] = [...new Set(props.obj.map((car) => car.manufacturer_name))];


  // const filterOptions: string[] = ['All', ...new Set(props.obj.map((car) => car.manufacturer_name))];

  // const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedFilter(event.target.value);
  // };

  // const filteredCars: CarProps[] = selectedFilter === 'All' ? props.obj : props.obj.filter((car) => car.manufacturer_name === selectedFilter);

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

    // Apply filters to the data (e.g., cars)
  const filteredCars: CarProps[] = props.obj.filter((car) => {
    // Check if the car matches all selected filters
    return selectedFilters.every((selectedFilter) => {
      // Replace these conditions with your actual filtering logic based on car properties
      return (
        car.manufacturer_name === selectedFilter ||
        String(car.model_year) === selectedFilter
        // Add more conditions as needed for additional filters
      );
    });
  });

  return (
    <div>
      <label>
        {/* Filter by Brand:
        <select value={selectedFilter} onChange={handleFilterChange}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))} */}
        {/* </select> */}
      {filterOptions.map((filterOption) => (
        <label key={filterOption}>
          <input
            type="checkbox"
            value={filterOption}
            checked={selectedFilters.includes(filterOption)}
            onChange={handleCheckboxChange}
          />
          {filterOption}
        </label>
      ))}
      </label>
      <ul>
        {displayFirstNCars(filteredCars, 10)}
      </ul>
    </div>
  );
};
