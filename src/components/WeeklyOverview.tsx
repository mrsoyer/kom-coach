import React, { useState } from 'react';
import { PersonRunning, Ruler } from 'lucide-react';

interface WeekStats {
  totalWorkouts: number;
  totalDistance: number;
  weekNumber: number;
  coachMessage: string;
  coachImage: string;
  coachName: string;
}

function WeeklyOverview() {
  const [stats] = useState<WeekStats>({
    totalWorkouts: 3,
    totalDistance: 22.5,
    weekNumber: 1,
    coachMessage: "Welcome Clem to your personalized training plan! This week we'll focus on building your base with easy runs. Remember to stay in your comfort zone and enjoy the process.",
    coachImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    coachName: "Coach ClemClem"
  });

  const [isMessageExpanded, setIsMessageExpanded] = useState(false);

  return (
    <div className="px-6">
      {/* Week Stats */}
      <div className="bg-white rounded-3xl p-6 shadow-md space-y-6">
        {/* Week Title */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Week {stats.weekNumber}</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <PersonRunning className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">TOTAL WORKOUTS</p>
              <p className="text-xl font-bold">{stats.totalWorkouts}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ruler className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">DISTANCE</p>
              <p className="text-xl font-bold">{stats.totalDistance}KM</p>
            </div>
          </div>
        </div>

        {/* Coach Message */}
        <div className="flex gap-4">
          <img
            src={stats.coachImage}
            alt={stats.coachName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-1">{stats.coachName}</h4>
            <p className={`text-gray-600 ${!isMessageExpanded ? 'line-clamp-2' : ''}`}>
              {stats.coachMessage}
            </p>
            <button
              onClick={() => setIsMessageExpanded(!isMessageExpanded)}
              className="text-gray-500 text-sm mt-1"
            >
              {isMessageExpanded ? 'voir moins' : 'voir plus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyOverview;