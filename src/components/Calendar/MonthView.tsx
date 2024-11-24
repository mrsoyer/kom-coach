import React from 'react';

interface Day {
  date: string;
  isCurrentMonth?: boolean;
  hasActivity?: boolean;
  activityType?: 'running' | 'workout';
  isToday?: boolean;
}

const generateDays = (): Day[] => {
  // This is a simplified version - you'd want to generate this dynamically
  const days: Day[] = [];
  
  // Previous month days
  for (let i = 27; i <= 31; i++) {
    days.push({ date: i.toString(), isCurrentMonth: false });
  }
  
  // Current month days
  for (let i = 1; i <= 30; i++) {
    const day: Day = { 
      date: i.toString(), 
      isCurrentMonth: true,
    };
    
    // Add some sample activities
    if ([1, 2, 3].includes(i)) {
      day.hasActivity = true;
      day.activityType = 'running';
    }
    if ([5, 9, 13, 18, 19, 23].includes(i)) {
      day.hasActivity = true;
      day.activityType = i % 2 === 0 ? 'running' : 'workout';
    }
    if (i === 19) {
      day.isToday = true;
    }
    
    days.push(day);
  }
  
  return days;
};

const weekDays = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];

function MonthView() {
  const days = generateDays();

  return (
    <div className="pb-6">
      {/* Week days header */}
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={`${day.date}-${index}`}
            className="aspect-square flex flex-col items-center justify-center"
          >
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center text-lg
                ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                ${day.isToday ? 'bg-[#40c4ff] text-white' : ''}
                ${!day.isToday && day.hasActivity && day.isCurrentMonth ? 'text-[#40c4ff]' : ''}
              `}
            >
              {day.date}
            </div>
            {day.hasActivity && day.isCurrentMonth && (
              <div
                className={`
                  w-2 h-2 rounded-full mt-1
                  ${day.activityType === 'running' ? 'bg-green-500' : 'bg-[#40c4ff]'}
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;