import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';
  
export const YearFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element =>  {

  const yearFilterOptions: string[] = [...new Set(cars.map((car) => String(car.model_year)))];

  return (
    <div>
      <h3>Year</h3>
      {yearFilterOptions.map((filterOption) => (
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

