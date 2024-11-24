import React, { useState } from 'react';
import WeeklyStats from './WeeklyStats';
import DailyWorkouts from './DailyWorkouts';

function Training() {
  const [currentDate] = useState(new Date());
  const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  return (
    <div className="pb-20">
      {/* Calendar Header */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <span className="text-xl">⬅️</span>
          </button>
          <h2 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button className="p-2">
            <span className="text-xl">➡️</span>
          </button>
        </div>

        {/* Weekly Calendar */}
        <div className="grid grid-cols-7 gap-1">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
            <div key={index} className="text-center text-sm text-gray-500">
              {day}
            </div>
          ))}
          {Array.from({ length: 7 }).map((_, index) => {
            const isToday = index === 2;
            const hasWorkout = [0, 2, 5].includes(index);
            return (
              <div key={index} className="text-center py-2">
                <div
                  className={`
                    w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-medium
                    ${isToday ? 'bg-[#40c4ff] text-white' : ''}
                    ${hasWorkout && !isToday ? 'text-[#40c4ff]' : ''}
                  `}
                >
                  {index + 18}
                </div>
                {hasWorkout && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#40c4ff] mx-auto mt-1" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Stats */}
      <WeeklyStats />

      {/* Daily Workouts */}
      <DailyWorkouts />

      {/* Add Workout Button */}
      <button 
        className="fixed bottom-24 right-6 w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center text-2xl"
        aria-label="Ajouter un entraînement"
      >
        ➕
      </button>
    </div>
  );
}

export default Training;