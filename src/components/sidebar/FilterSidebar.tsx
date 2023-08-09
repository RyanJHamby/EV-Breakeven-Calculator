import React, { useState, FC } from 'react';
import { CarProps } from '../Car';
import { displayFirstNCars } from '../../utils/customCarsDisplayFunctions';
import { ManufacturerFilterSection } from './filterSections/ManufacturerFilterSection';
import { YearFilterSection } from './filterSections/YearFilterSection';
import { FuelNameFilterSection } from './filterSections/FuelNameFilterSection';
import { ElectricRangeFilterSection } from './filterSections/ElectricRangeFilterSection';

export interface SidebarFilterSectionProps {
  cars: CarProps[];
  selectedFilters: string[];
  onChange: (selected: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterSidebar: FC<{ obj: CarProps[] }> = (props): JSX.Element => {
  const [selectedManufacturerFilters, setSelectedManufacturerFilters] = useState<string[]>([]);
  const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);
  const [selectedFuelNameFilters, setSelectedFuelNameFilters] = useState<string[]>([]);
  const [selectedElectricRangeFilters, setSelectedElectricRangeFilters] = useState<string[]>([]);

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

  const handleFuelNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedManufacturerFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

  const handleElectricRangeFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedManufacturerFilters((prevFilters) =>
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
    <div className="filterSidebar">
      <ManufacturerFilterSection cars={props.obj} selectedFilters={selectedManufacturerFilters} onChange={handleManufacturerFilterChange}/>
      <YearFilterSection cars={props.obj} selectedFilters={selectedYearFilters} onChange={handleYearFilterChange}/>
      <FuelNameFilterSection cars={props.obj} selectedFilters={selectedFuelNameFilters} onChange={handleFuelNameFilterChange}/>
      <ElectricRangeFilterSection cars={props.obj} selectedFilters={selectedElectricRangeFilters} onChange={handleElectricRangeFilterChange}/>
      <ul>
        {displayFirstNCars(filteredCars, 10)}
      </ul>
    </div>
  );
};
