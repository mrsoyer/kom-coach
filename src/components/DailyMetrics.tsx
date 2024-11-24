import React from 'react';
import { Timer, Activity, Battery } from 'lucide-react';

function DailyMetrics() {
  const metrics = {
    weeklyDistance: 22.5,
    efficiency: 85,
    duration: 180,
    fatigue: 35
  };

  return (
    <div className="px-6">
      <div className="grid grid-cols-2 gap-4">
        {/* Weekly Distance */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">Distance semaine</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{metrics.weeklyDistance}</span>
            <span className="text-sm text-gray-500">km</span>
          </div>
        </div>

        {/* Efficiency Score */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="w-5 h-5 text-emerald-500" />
            <span className="text-sm text-gray-600">Efficacité</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{metrics.efficiency}</span>
            <span className="text-sm text-gray-500">/ 100</span>
          </div>
        </div>

        {/* Training Duration */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-600">Durée totale</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{metrics.duration}</span>
            <span className="text-sm text-gray-500">min</span>
          </div>
        </div>

        {/* Fatigue Level */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Battery className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Fatigue</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{metrics.fatigue}</span>
            <span className="text-sm text-gray-500">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyMetrics;