import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const ElectricRangeFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element => {

  const electricRangeFilterOptions: string[] = [...new Set(cars.map((car) => car.electric_range))];

  return (
    <div>
      <h3>Electric Range</h3>
      {electricRangeFilterOptions
        .filter((filterOption) => filterOption) // filter out undefined strings
        .filter((filterOption) => Number(filterOption) >= 75 || filterOption.includes("-")) // filter out electric ranges
        .sort((a, b) => {
          const numA = a.includes("-") ? (Number(a.split("-")[0]) + Number(a.split("-")[1]))/2 : Number(a);
          const numB = b.includes("-") ? (Number(b.split("-")[0]) + Number(b.split("-")[1]))/2 : Number(b);
          return numB - numA;
        })
        .map((filterOption) => (
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
      <h3>MPG</h3>
      {electricRangeFilterOptions
        .filter((filterOption) => filterOption) // filter out undefined strings
        .filter((filterOption) => Number(filterOption) < 75) // filter out electric ranges
        .sort((a, b) => Number(b) - Number(a))
        .map((filterOption) => (
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
