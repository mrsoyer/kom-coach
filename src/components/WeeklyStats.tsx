import React from 'react';

function WeeklyStats() {
  return (
    <div className="px-6 py-8 bg-white mt-2">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">Cette semaine</h3>
          <p className="text-gray-500">18 - 24 novembre</p>
        </div>
        <div className="px-4 py-2 bg-gray-100 rounded-full text-sm">
          Semaine 4/16
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">🏃</span>
            <span className="text-sm text-gray-600">Séances</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">3</span>
            <span className="text-sm text-gray-500">/ 4</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">📏</span>
            <span className="text-sm text-gray-600">Distance</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">22.5</span>
            <span className="text-sm text-gray-500">km</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyStats;