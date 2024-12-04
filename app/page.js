'use client'; // Cette ligne marque le fichier comme un composant côté client

import { useState } from 'react';
import Navigation from './components/Navigation';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddTask = (task) => setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  const handleCompleteTask = (id) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Open') return !task.completed;
    if (filter === 'Closed') return task.completed;
    return false;
  });

  return (
    <div className="p-6 space-y-4">
      <Navigation activeSection={filter} />
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
      <TaskList tasks={filteredTasks} onComplete={handleCompleteTask} />
      <AddTaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddTask={handleAddTask} />
    </div>
  );
}
