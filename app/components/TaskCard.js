export default function TaskCard({ task, onComplete }) {
    return (
      <div className="p-4 bg-white shadow-md rounded-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.project}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onComplete(task.id)}
            className={`${
              task.completed ? 'bg-green-500' : 'bg-gray-200'
            } px-2 py-1 rounded-md`}
          >
            {task.completed ? 'Done' : 'Complete'}
          </button>
        </div>
      </div>
    );
  }
  