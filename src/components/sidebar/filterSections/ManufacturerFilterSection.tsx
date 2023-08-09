import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const ManufacturerFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const manufacturerFilterOptions: string[] = [...new Set(cars.map((car) => car.manufacturer_name))];

  return (
    <div>
      {manufacturerFilterOptions.map((filterOption) => (
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
