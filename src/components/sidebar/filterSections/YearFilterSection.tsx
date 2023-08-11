import { FC, useState } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';
  
export const YearFilterSection: FC<SidebarFilterSectionProps> = ({cars, selectedFilters, onChange}): JSX.Element =>  {

  const yearFilterOptions: string[] = [...new Set(cars.map((car) => String(car.model_year)))];
  const [clearAll, setClearAll] = useState(false);

  function clearCheckboxes() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.filterItem input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
  }

  return (
    <div>
      <h3>Year</h3>
      <input
        type="checkbox"
        value={"Clear all Year Filters"}
        checked={clearAll}
        onChange={clearCheckboxes}
      />
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

