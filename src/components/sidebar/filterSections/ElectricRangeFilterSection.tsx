import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const ElectricRangeFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const electricRangeFilterOptions: string[] = [...new Set(cars.map((car) => car.electric_range))];

  return (
    <div>
      <h3>Electric Range</h3>
      {electricRangeFilterOptions.map((filterOption) => (
        <label key={filterOption} className="listItem">
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
