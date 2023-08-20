import { FC } from 'react';
import React from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const ManufacturerFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const manufacturerFilterOptions: string[] = [...new Set(cars.map((car) => car.manufacturer_name))];

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
