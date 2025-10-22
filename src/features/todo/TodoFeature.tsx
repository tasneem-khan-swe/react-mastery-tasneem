import { useRef, useState } from 'react';
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import type { EditTodo, TodoItem } from './types';

const INITIAL_EDIT_STATE: EditTodo = { id: null, text: '' }
export const TodoFeature: React.FC = () => {
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
    const newTodo: TodoItem = { id: Date.now(), text: value, completed: false }
    setTodos(prev => [...prev, newTodo])
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }
  /** ✅ Toggles task completion */
  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const handleEditTask = (todo: TodoItem) => {
    setEditTask(todo)
  }
  const handleCancelEdit = () => {
    setEditTask(INITIAL_EDIT_STATE)
  }
  /** ✅ Deletes a todo item */
  const handleDeleteTask = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  /** ✅ Updates the edited todo text */
  const handleUpdateTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: editTask.text } : todo))
    handleCancelEdit()
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Todo App</h2>
      {/* Add Todo Form */}
      <TodoForm inputRef={inputRef} onSubmit={handleAddTodo} />
      {/* Todo List */}
      <TodoList
        todos={todos}
        onComplete={handleToggleComplete}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onCancel={handleCancelEdit}
        editTask={editTask}
        setEditTask={setEditTask}
        onUpdate={handleUpdateTodo}
      />
    </div>
  )
}
