import type { TodoItem, TodoListProps } from '../types';
import { CustomButton } from './CustomButton';

export const TodoList: React.FC<TodoListProps> = ({ todos, editTask, setEditTask, onComplete, onEdit, onCancel, onDelete, onUpdate }) => {

  return (
    <div className="max-w-md mx-auto mt-8">
      <ul className="space-y-4">
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
                  <div className="flex gap-2">
                    <CustomButton className='bg-yellow-400' label='Edit' onClick={() => onEdit(todo)} />
                    <CustomButton className='bg-red-400' label='Delete' onClick={() => onDelete(id)} />
                  </div>
                </>
              ) : (
                <>
                  <input
                    value={editTask?.text}
                    onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-2">
                    <CustomButton className='bg-blue-400' label='Update' onClick={() => onUpdate(id)} />
                    <CustomButton className='bg-yellow-400' label='Cancel' onClick={onCancel} />
                    <CustomButton className='bg-red-400' label='Delete' onClick={() => onDelete(id)} />
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
