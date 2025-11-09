import React from 'react';
import type { ICheckboxesProps, ICheckboxItem } from './types';
import { updateChildCheckboxes, updateParentCheckbox } from './helper';
import { checkboxesData } from './mock-data';

const Checkboxes: React.FC<ICheckboxesProps> = ({ data, setData, level = 0 }) => {
  const handleCheckboxChange = (id: number) => {
    const updateCheckboxes = (items: ICheckboxItem[]): ICheckboxItem[] => {
      return items.map(item => {
        if (item.id === id) {
          const newCheckedState = !item.checked;
          return updateChildCheckboxes(item, newCheckedState);
        } else if (item.children) {
          return {
            ...item,
            children: updateCheckboxes(item.children),
          };
        }
        return item;
      });
    };

    setData(prev => {
      const updatedData = updateCheckboxes(prev);
      return updateParentCheckbox(updatedData);
    });
  };

  return (
    <>
      {data.map(item => (
        <div key={item.id} style={{ paddingLeft: `${level * 20}px` }}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label>{item.name}</label>
          {item.children && (
            <Checkboxes
              data={item.children}
              setData={setData}
              level={level + 1}
            />
          )}
        </div>
      ))}
    </>
  );
};

export const NestedCheckboxFeature: React.FC = () => {
  const [checkboxData, setCheckboxData] = React.useState<ICheckboxItem[]>(checkboxesData);
  return (
    <>
      <div>Nested Checkbox Feature</div>
      <Checkboxes data={checkboxData} setData={setCheckboxData} />
    </>
  )
}
