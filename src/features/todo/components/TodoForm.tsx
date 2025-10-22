import React from 'react'
import type { TodoFormProps } from '../types'

export const TodoForm: React.FC<TodoFormProps> = ({ inputRef, onSubmit }) => {
  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-3">
        <input
          ref={inputRef}
          placeholder="Enter Task"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Add
        </button>
      </form>
    </div>
  )
}
