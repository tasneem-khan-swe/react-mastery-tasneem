import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodo'


export const TodoFeature: React.FC = () => {
  const { inputRef, todos, editTask, setEditTask, handleAddTodo, handleToggleComplete, handleEditTask,handleCancelEdit, handleDeleteTask, handleUpdateTodo } =useTodos();

  return (
    <div className="flex flex-col items-center">
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
