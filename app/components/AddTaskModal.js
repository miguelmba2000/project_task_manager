//modal Add Stack
import { useState } from 'react'; 

export default function AddTaskModal({ onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [time, setTime] = useState('');

  const handleSave = () => {
    if (title && project && time) {
      onSave({ title, project, time, completed: false, archived: false, assignees: [] });
      onClose();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add New Task</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Project</label>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter project name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="e.g., Today 10:00 AM - 11:00 AM"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
