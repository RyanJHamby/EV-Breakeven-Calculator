import React, { FC, useState } from 'react';
import { CarProps } from '../Car';
  
export const ManufacturerFilterSection: FC<{obj: CarProps[], selected: string[], onChange: (selected: React.ChangeEvent<HTMLInputElement>) => void; }> = (props): JSX.Element => {
//   const [selectedManufacturerFilters, setSelectedManufacturerFilters] = useState<string[]>([]);

  const manufacturerFilterOptions: string[] = [...new Set(props.obj.map((car) => car.manufacturer_name))];

 const handleManufacturerCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    handleManufacturerCheckboxChange((prevFilters) =>
          event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    );

    // setSelectedManufacturerFilters((prevFilters) =>
    //   event.target.checked ? [...prevFilters, filterValue] : prevFilters.filter((filter) => filter !== filterValue)
    // );
  };

  return (
    <div>
      {manufacturerFilterOptions.map((filterOption) => (
        <label key={filterOption}>
          <input
            type="checkbox"
            value={filterOption}
            checked={selectedManufacturerFilters.includes(filterOption)}
            onChange={handleManufacturerCheckboxChange}
          />
          {filterOption}
        </label>
      ))}
    </div>
  );
};
