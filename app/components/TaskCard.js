// components/TaskCard.js
export default function TaskCard({ task, onComplete }) {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg space-y-2">
      <div>
        <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">{task.project}</p>
        <p className="text-xs text-gray-400">{task.time}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onComplete(task.id)}
          className={`w-6 h-6 rounded-full border ${task.completed ? 'bg-blue-500' : 'bg-white'} flex items-center justify-center`}
        >
          {task.completed && <span className="text-white text-bold">✔</span>}
        </button>
        {task.assignees && (
          <div className="flex -space-x-2">
            {task.assignees.map((assignee, index) => (
              <img
                key={index}
                src={assignee.avatar}
                alt={assignee.name}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
