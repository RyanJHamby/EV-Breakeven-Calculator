import React, { useState, FC } from 'react';
import { CarProps } from './Car';
import { displayFirstNCars } from '../utils/customCarsDisplayFunctions';
  
export const FilterSidebar: FC<{ obj: CarProps[] }> = (props): JSX.Element => {
  const [selectedManufacturerFilters, setSelectedManufacturerFilters] = useState<string[]>([]);
  const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);

  const manufacturerFilterOptions: string[] = [...new Set(props.obj.map((car) => car.manufacturer_name))];
  const yearFilterOptions: string[] = [...new Set(props.obj.map((car) => String(car.model_year)))];

 const handleManufacturerCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedManufacturerFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

const handleYearCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedYearFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

  const filteredCars: CarProps[] = props.obj.filter((car) => {
      return (
        (selectedManufacturerFilters.length === 0 || selectedManufacturerFilters.includes(car.manufacturer_name)) &&
        (selectedYearFilters.length === 0 || selectedYearFilters.includes(String(car.model_year)))
      );
  });

  return (
    <div>
      {manufacturerFilterOptions.map((filterOption) => (
        <label key={filterOption}>
          <input
            type="checkbox"
            value={filterOption}
            checked={selectedManufacturerFilters.includes(filterOption)}
            onChange={handleManufacturerCheckboxChange}
          />
          {filterOption}
        </label>
      ))}
      {yearFilterOptions.map((filterOption) => (
        <label key={filterOption}>
          <input
            type="checkbox"
            value={filterOption}
            checked={selectedYearFilters.includes(filterOption)}
            onChange={handleYearCheckboxChange}
          />
          {filterOption}
        </label>
      ))}
      <ul>
        {displayFirstNCars(filteredCars, 10)}
      </ul>
    </div>
  );
};
