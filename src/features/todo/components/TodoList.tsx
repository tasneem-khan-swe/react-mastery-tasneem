import type { TodoItem, TodoListProps } from '../types';
import { CustomButton } from './CustomButton';

export const TodoList: React.FC<TodoListProps> = ({ todos, editTask, setEditTask, onComplete, onEdit, onCancel, onDelete, onUpdate }) => {

  return (
      <ul className="space-y-4 mt-6">
        {todos?.length > 0 && todos.map((todo: TodoItem) => {
          const { id, text, completed } = todo;
          return (
            <li
              key={id}
              className="flex items-center justify-between gap-2 bg-gray-50 px-4 py-3"
            >
              {editTask?.id !== id ? (
                <>
                  <span
                    className={`flex-1 cursor-pointer text-gray-800 ${completed ? "line-through text-gray-400" : ""
                      }`}
                    role='checkbox'
                    onClick={() => onComplete(id)}
                  >
                    {text}
                  </span>
                    <CustomButton className='bg-yellow-400' label='Edit' onClick={() => onEdit(todo)} />
                    <CustomButton className='bg-red-400' label='Delete' onClick={() => onDelete(id)} />
                </>
              ) : (
                <>
                  <input
                    id="todo-edit-input"
                    name="todo-edit-input"
                    value={editTask?.text}
                    onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                    <CustomButton className='bg-yellow-400' label='x' onClick={onCancel} />
                    <CustomButton className='bg-blue-400' label='Update' onClick={() => onUpdate(id)} />
                    <CustomButton className='bg-red-400' label='Delete' onClick={() => onDelete(id)} />
                </>
              )}
            </li>
          );
        })}
      </ul>
  );
};
