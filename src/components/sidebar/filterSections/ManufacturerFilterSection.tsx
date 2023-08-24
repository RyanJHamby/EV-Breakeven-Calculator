import React, { FC, useMemo } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const ManufacturerFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const manufacturerFilterOptions = useMemo(() => {
    return [...new Set(cars.map((car) => String(car.manufacturer_name)))];
  }, [cars]);

  return (
    <div>
      <h3>Manufacturer</h3>
      {manufacturerFilterOptions.filter((filterOption) => filterOption) // filter out undefined strings
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
