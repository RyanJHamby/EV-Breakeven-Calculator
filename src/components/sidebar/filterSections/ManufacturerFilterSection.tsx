import { FC } from 'react';
import { SidebarFilterSectionProps } from '../FilterSidebar';

export const ManufacturerFilterSection: FC<{ obj: SidebarFilterSectionProps }> = ({cars, selected, onChange}): JSX.Element => {

  const manufacturerFilterOptions: string[] = [...new Set(props.obj.cars.map((car) => car.manufacturer_name))];

  return (
    <div>
      {manufacturerFilterOptions.map((filterOption) => (
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
