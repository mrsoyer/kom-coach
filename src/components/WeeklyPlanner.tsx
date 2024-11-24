import React from 'react';
import { ChevronDown } from 'lucide-react';

const days = [
  { short: 'Lun', date: '18' },
  { short: 'Mar', date: '19' },
  { short: 'Mer', date: '20' },
  { short: 'Jeu', date: '21' },
  { short: 'Ven', date: '22' },
  { short: 'Sam', date: '23', active: true },
  { short: 'Dim', date: '24' },
];

function WeeklyPlanner() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Planner de la semaine</h2>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-medium">
          Voir plus
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between mb-6">
          {days.map((day) => (
            <div
              key={day.short}
              className={`flex flex-col items-center ${
                day.active
                  ? 'bg-gray-100 px-4 py-2 rounded-2xl text-black'
                  : 'text-gray-400'
              }`}
            >
              <span className="text-sm font-medium">{day.short}</span>
              <span className="text-lg font-semibold mt-1">{day.date}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full flex justify-center">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
}

export default WeeklyPlanner;