// components/TaskCard.js
import Image from 'next/image';

export default function TaskCard({ task, onComplete }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      {/* Partie supérieure avec titre à gauche et projet en dessous, icône à droite */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          <p className="text-sm text-gray-500">{task.project}</p>
        </div>
        <button
          onClick={() => onComplete(task.id)}
          className={`w-6 h-6 rounded-full border ${
            task.completed ? 'bg-blue-500' : 'bg-white'
          } flex items-center justify-center`}
        >
          {task.completed && <span className="text-white text-bold">✔</span>}
        </button>
      </div>

      {/* Partie inférieure : détails moins visibles avec l'heure à gauche et les utilisateurs à droite */}
      <div className="flex justify-between items-center mt-2 opacity-70">
        <div className="text-xs text-gray-400">{task.time}</div>
        {task.assignees && (
          <div className="flex -space-x-2">
            {task.assignees.map((assignee, index) => (
              <div key={index} className="relative w-6 h-6">
                <Image
                  src={assignee.avatar} // Assurez-vous que l'URL est correcte
                  alt={assignee.name}
                  width={24} // Largeur
                  height={24} // Hauteur
                  className="rounded-full border-2 border-white object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
