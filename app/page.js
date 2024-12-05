"use client";

import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

export default function Home() {
  //deux tasks par défaut
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Client Review & Feedback',
      project: 'Crypto Wallet Redesign',
      time: 'Today 10:00 PM - 11:45 PM',
      completed: true,
      archived: false,
      assignees: [
        { avatar: '/avatars/user.png', name: 'Alice' },
        { avatar: '/avatars/user.png', name: 'Alice' },
      ],
    },
    {
      id: 2,
      title: 'Create Wireframe',
      project: 'Crypto Wallet Redesign',
      time: 'Today 09:15 PM - 10:00 PM',
      completed: true,
      archived: false,
      assignees: [
        { avatar: '/avatars/user.png', name: 'Alice' },
        { avatar: '/avatars/user.png', name: 'Alice' },
      ],
    },
  ]);

  const [filter, setFilter] = useState('All'); // Par défaut, afficher toutes les tâches
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCompleteTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    setModalOpen(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Open') return !task.completed && !task.archived;
    if (filter === 'Closed') return task.completed && !task.archived;
    if (filter === 'Archived') return task.archived;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Today&apos;s Task</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          + New Task
        </button>
      </div>

      <div className="flex space-x-4 text-sm mb-4">
        {['All', 'Open', 'Closed', 'Archived'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded ${
              filter === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <TaskList tasks={filteredTasks} onComplete={handleCompleteTask} />

      {isModalOpen && <AddTaskModal onClose={() => setModalOpen(false)} onSave={handleAddTask} />}
    </div>
  );
}
