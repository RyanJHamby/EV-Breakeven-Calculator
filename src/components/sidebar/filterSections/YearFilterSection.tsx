import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';
  
export const YearFilterSection: FC<{ obj: SidebarFilterSectionProps }> = (props): JSX.Element =>  {

  const yearFilterOptions: string[] = [...new Set(props.obj.cars.map((car) => String(car.model_year)))];

  return (
    <div>
      {yearFilterOptions.map((filterOption) => (
        <label key={filterOption}>
          <input
            type="checkbox"
            value={filterOption}
            checked={props.obj.selected.includes(filterOption)}
            onChange={props.obj.onChange}
          />
          {filterOption}
        </label>
      ))}
    </div>
  );
};

