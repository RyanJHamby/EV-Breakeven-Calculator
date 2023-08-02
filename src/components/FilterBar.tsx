import React, { useState, FC } from 'react';
import { CarProps } from './Car';
import { displayFirstNCars } from '../utils/customCarsDisplayFunctions';
  
const FilterBar: FC<{ obj: CarProps[] }> = (props): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Get the unique filter options from the 'cars' array
  const filterOptions: string[] = ['All', ...new Set(props.obj.map((car) => car.manufacturer_name))];

  // Handle the filter selection change
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  // Filter the cars array based on the selected filter
  const filteredCars: CarProps[] = selectedFilter === 'All' ? props.obj : props.obj.filter((car) => car.manufacturer_name === selectedFilter);

  return (
    <div>
      <label>
        Filter by Brand:
        <select value={selectedFilter} onChange={handleFilterChange}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {displayFirstNCars(filteredCars, 10)}
      </ul>
    </div>
  );
};

export default FilterBar;
