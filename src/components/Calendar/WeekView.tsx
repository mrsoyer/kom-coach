import React from 'react';

const days = [
  { short: 'lun.', date: '18', hasActivity: true, activityType: 'running' },
  { short: 'mar.', date: '19', hasActivity: true, activityType: 'workout', isToday: true },
  { short: 'mer.', date: '20' },
  { short: 'jeu.', date: '21' },
  { short: 'ven.', date: '22' },
  { short: 'sam.', date: '23', hasActivity: true, activityType: 'running' },
  { short: 'dim.', date: '24' },
];

function WeekView() {
  return (
    <div className="grid grid-cols-7 gap-2 pb-6">
      {days.map((day) => (
        <div
          key={day.date}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 mb-1">{day.short}</span>
          <div
            className={`
              w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium
              ${day.isToday ? 'bg-[#40c4ff] text-white' : 'text-gray-900'}
              ${!day.isToday && day.hasActivity ? 'text-[#40c4ff]' : ''}
            `}
          >
            {day.date}
          </div>
          {day.hasActivity && (
            <div
              className={`
                w-2 h-2 rounded-full mt-2
                ${day.activityType === 'running' ? 'bg-green-500' : 'bg-[#40c4ff]'}
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default WeekView;