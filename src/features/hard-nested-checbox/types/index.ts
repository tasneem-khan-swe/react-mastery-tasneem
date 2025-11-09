
interface ICheckboxItem {
  id: number;
  name: string;
  checked: boolean;
  children?: ICheckboxItem[];
}
interface ICheckboxesProps {
  data: ICheckboxItem[];
  setData: React.Dispatch<React.SetStateAction<ICheckboxItem[]>>;
  level?: number;
}
export type {ICheckboxItem, ICheckboxesProps}