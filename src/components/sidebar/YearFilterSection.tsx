import React, { FC, useState } from 'react';
import { CarProps } from '../Car';
  
export const YearFilterSection: FC<{ obj: CarProps[], selected: string[], onChange: (selected: React.ChangeEvent<HTMLInputElement>) => void; }> = (props): JSX.Element => {
  const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);

  const yearFilterOptions: string[] = [...new Set(props.obj.map((car) => String(car.model_year)))];

const handleYearCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSelectedYearFilters((prevFilters) =>
      event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );
  };

  return (
    <div>
      {yearFilterOptions.map((filterOption) => (
        <label key={filterOption}>
          <input
            type="checkbox"
            value={filterOption}
            checked={selectedYearFilters.includes(filterOption)}
            onChange={handleYearCheckboxChange}
          />
          {filterOption}
        </label>
      ))}
    </div>
  );
};

