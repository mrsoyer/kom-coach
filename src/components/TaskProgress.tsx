import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: '1', title: 'Remplis ton profil', completed: true },
  { id: '2', title: 'Connecte tes données', completed: false },
  { id: '3', title: 'Personnalise ton entraînement', completed: true },
  { id: '4', title: 'Rejoins la team Frive', completed: false },
];

function TaskProgress() {
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <section className="mb-8">
      <div className="bg-white rounded-3xl overflow-hidden shadow-md">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Plus que {remainingTasks} tâche{remainingTasks > 1 ? 's' : ''} à effectuer
          </h3>
          <div className="h-2 bg-gray-100 rounded-full mb-6">
            <div 
              className="h-full bg-black rounded-full transition-all duration-300"
              style={{ width: `${((tasks.length - remainingTasks) / tasks.length) * 100}%` }}
            />
          </div>

          <div className="space-y-1">
            {tasks.map(task => (
              <button
                key={task.id}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                    task.completed ? 'bg-yellow-400 border-yellow-400' : 'border-gray-200'
                  }`}>
                    {task.completed && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-lg text-gray-900">{task.title}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskProgress;