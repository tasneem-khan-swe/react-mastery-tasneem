import { useRef, useState } from 'react'
import type { TodoItem, EditTodo } from '../types'

const INITIAL_EDIT_STATE: EditTodo = { id: null, text: '' }

export const useTodos = () => {
 const inputRef = useRef<HTMLInputElement | null>(null)
   const [todos, setTodos] = useState<TodoItem[]>([])
   const [editTask, setEditTask] = useState<EditTodo>(INITIAL_EDIT_STATE)
 
   /** ✅ Handles adding a new todo item */
   const handleAddTodo = (e: React.FormEvent) => {
     e.preventDefault()
 
     const value = inputRef.current?.value.trim()
     if (!value) {
       inputRef.current?.focus()
       return
     }
 
     const newTodo: TodoItem = {
       id: Date.now(),
       text: value,
       completed: false,
     }
 
     setTodos(prev => [...prev, newTodo])
 
     if (inputRef.current) {
       inputRef.current.value = ''
       inputRef.current.focus()
     }
   }
 
   /** ✅ Toggles task completion */
   const handleToggleComplete = (id: number) => {
     setTodos(prev =>
       prev.map(todo =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo
       )
     )
   }
   const handleEditTask=(todo: TodoItem)=>{
     setEditTask(todo)
   }
   const handleCancelEdit=()=>{
     setEditTask(INITIAL_EDIT_STATE)
   }
 
   /** ✅ Deletes a todo item */
   const handleDeleteTask = (id: number) => {
     setTodos(prev => prev.filter(todo => todo.id !== id))
   }
 
   /** ✅ Updates the edited todo text */
   const handleUpdateTodo = (id: number) => {
     setTodos(prev =>
       prev.map(todo =>
         todo.id === id ? { ...todo, text: editTask.text } : todo
       )
     )
     handleCancelEdit()
   }
  return { inputRef, todos, editTask, setEditTask, handleAddTodo, handleToggleComplete, handleEditTask,handleCancelEdit, handleDeleteTask, handleUpdateTodo }
}
