import React, { FC, useState, useEffect } from 'react';
import { FilterSidebarProps } from '../../pages/MainPage';
import { CarProps } from '../car/Car';
import { ElectricRangeFilterSection } from './filterSections/ElectricRangeFilterSection';
import { FuelNameFilterSection } from './filterSections/FuelNameFilterSection';
import { ManufacturerFilterSection } from './filterSections/ManufacturerFilterSection';
import { YearFilterSection } from './filterSections/YearFilterSection';

export interface SidebarFilterSectionProps {
  cars: CarProps[];
  selectedFilters: string[];
  onChange: (selected: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterSidebar: FC<FilterSidebarProps> = ({ unfilteredCars, onChange }): JSX.Element => {
  const [selectedManufacturerFilters, setSelectedManufacturerFilters] = useState<string[]>([]);
  const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);
  const [selectedFuelNameFilters, setSelectedFuelNameFilters] = useState<string[]>([]);
  const [selectedElectricRangeFilters, setSelectedElectricRangeFilters] = useState<string[]>([]);

  useEffect(() => {
    updateCarsFilters();
  }, [selectedManufacturerFilters, selectedYearFilters, selectedFuelNameFilters, selectedElectricRangeFilters]);

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
    setSelectedFuelNameFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

  const handleElectricRangeFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedElectricRangeFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };
  
  const updateCarsFilters = () => onChange(unfilteredCars.filter((car) => {
      return (
        (selectedManufacturerFilters.length === 0 || selectedManufacturerFilters.includes(car.manufacturer_name)) &&
        (selectedYearFilters.length === 0 || selectedYearFilters.includes(String(car.model_year))) &&
        (selectedFuelNameFilters.length === 0 || selectedFuelNameFilters.includes(String(car.fuel_name))) &&
        (selectedElectricRangeFilters.length === 0 || selectedElectricRangeFilters.includes(String(car.electric_range)))
      );
  }));

  return (
    <div className="filterSidebar">
      <ManufacturerFilterSection cars={unfilteredCars} selectedFilters={selectedManufacturerFilters} onChange={handleManufacturerFilterChange}/>
      <YearFilterSection cars={unfilteredCars} selectedFilters={selectedYearFilters} onChange={handleYearFilterChange}/>
      <FuelNameFilterSection cars={unfilteredCars} selectedFilters={selectedFuelNameFilters} onChange={handleFuelNameFilterChange}/>
      <ElectricRangeFilterSection cars={unfilteredCars} selectedFilters={selectedElectricRangeFilters} onChange={handleElectricRangeFilterChange}/>
    </div>
  );
};
