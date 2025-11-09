import type { ICheckboxItem } from "../types";

const updateChildCheckboxes = (item: ICheckboxItem, checked: boolean): ICheckboxItem => {
  const newItem = { ...item, checked };
  if (item.children) {
    newItem.children = item.children.map(child => updateChildCheckboxes(child, checked));
  }
  return newItem;
};

const updateParentCheckbox = (items: ICheckboxItem[]): ICheckboxItem[] => {
  return items.map(item => {
    if (item.children) {
      const updatedChildren = updateParentCheckbox(item.children);
      const allChildrenChecked = updatedChildren.every(child => child.checked);
      return {
        ...item,
        checked: allChildrenChecked,
        children: updatedChildren,
      };
    }
    return item;
  });
};
export {updateChildCheckboxes, updateParentCheckbox}