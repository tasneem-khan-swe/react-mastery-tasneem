import type { FormEvent, RefObject } from "react";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type FilterType = "all" | "completed" | "pending";

export interface EditTodo {
  id: number | null;
  text: string;
}
export interface TodoFormProps{
  inputRef: RefObject<HTMLInputElement | null>; //revise
  onSubmit: (e:FormEvent)=>void
}
export interface TodoListProps{
  todos: TodoItem[];
  editTask: EditTodo;
  setEditTask: (arg: EditTodo)=>void;
  onComplete: (id: number)=>void;
  onEdit: (arg: TodoItem)=>void;
  onCancel: ()=>void;
  onDelete: (id: number)=>void;
  onUpdate: (id: number)=>void;
}
export interface FilterProps{
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}
export interface ButtonProps{
  label:string;
  className: string;
  onClick: ()=>void;
}