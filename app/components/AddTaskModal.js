import { useState } from 'react';

export default function AddTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = () => {
    if (title && project) {
      onAddTask({ title, project });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold">Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-md p-2 w-full mt-4"
        />
        <input
          type="text"
          placeholder="Project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="border rounded-md p-2 w-full mt-2"
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
