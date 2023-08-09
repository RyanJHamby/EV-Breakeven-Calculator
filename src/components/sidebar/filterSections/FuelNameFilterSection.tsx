import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const FuelNameFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const FuelNameFilterOptions: string[] = [...new Set(cars.map((car) => car.fuel_name))];

  return (
    <div>
      {FuelNameFilterOptions.map((filterOption) => (
        <label key={filterOption}>
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
