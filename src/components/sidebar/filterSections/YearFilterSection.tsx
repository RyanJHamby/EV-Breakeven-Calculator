import React, { FC, useMemo } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const YearFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element =>  {

  const yearFilterOptions = useMemo(() => {
    return [...new Set(cars.map((car) => String(car.model_year)))];
  }, [cars]);

  return (
    <div>
      <h3>Year</h3>
      {yearFilterOptions.filter((filterOption) => filterOption) // filter out undefined strings
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
