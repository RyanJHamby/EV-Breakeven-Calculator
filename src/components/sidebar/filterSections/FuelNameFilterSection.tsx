import React, { FC, useMemo } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const FuelNameFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const FuelNameFilterOptions = useMemo(() => {
    return [...new Set(cars.map((car) => String(car.fuel_name)))];
  }, [cars]);

  return (
    <div>
      <h3>Fuel Name</h3>
      {FuelNameFilterOptions.filter((filterOption) => filterOption) // filter out undefined strings
        .map((filterOption) => (
        <label key={filterOption} className="filterItem">
          <input
            type="checkbox"
            value={filterOption}
            checked={selectedFilters.includes(filterOption)}
            onChange={onChange}
          />
          {filterOption}
        </label>
      ))}
    </div>
  );
};
