import React, { useState, FC } from 'react';
import { CarProps } from '../Car';
import { displayFirstNCars } from '../../utils/customCarsDisplayFunctions';
import { ManufacturerFilterSection } from './filterSections/ManufacturerFilterSection';
import { YearFilterSection } from './filterSections/YearFilterSection';

export interface SidebarFilterSectionProps {
  cars: CarProps[];
  selectedFilters: string[];
  onChange: (selected: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterSidebar: FC<{ obj: CarProps[] }> = (props): JSX.Element => {
  const [selectedManufacturerFilters, setSelectedManufacturerFilters] = useState<string[]>([]);
  const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);

  const handleManufacturerFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedManufacturerFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

  const handleYearFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <ManufacturerFilterSection cars={props.obj} selectedFilters={selectedManufacturerFilters} onChange={handleManufacturerFilterChange}/>
      <YearFilterSection cars={props.obj} selectedFilters={selectedYearFilters} onChange={handleYearFilterChange}/>
      <ul>
        {displayFirstNCars(filteredCars, 10)}
      </ul>
    </div>
  );
};
