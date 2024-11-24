import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';

interface TimeEstimate {
  distance: string;
  current: string;
  target: string;
}

interface PersonalRecord {
  distance: string;
  time: string;
  date: string;
}

function LevelSection() {
  const timeEstimates: TimeEstimate[] = [
    { distance: '10K', current: '48:30', target: '45:00' },
    { distance: '21K', current: '1:52:00', target: '1:45:00' },
    { distance: '42K', current: '4:10:00', target: '3:55:00' },
  ];

  const personalRecords: PersonalRecord[] = [
    { distance: '5K', time: '23:45', date: '15 oct. 2023' },
    { distance: '10K', time: '48:30', date: '1 nov. 2023' },
    { distance: '21K', time: '1:52:00', date: '10 sept. 2023' },
  ];

  return (
    <section className="px-6">
      <h2 className="text-xl font-bold mb-4">Mon niveau</h2>
      
      {/* Performance Metrics */}
      <div className="bg-white rounded-3xl p-6 shadow-md space-y-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">VO2 MAX</p>
            <p className="text-2xl font-bold">48.5</p>
            <p className="text-sm text-gray-500">ml/kg/min</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">VMA</p>
            <p className="text-2xl font-bold">15.2</p>
            <p className="text-sm text-gray-500">km/h</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-emerald-600">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Top 15% des athlètes H 30-35 ans</span>
          </div>
        </div>
      </div>

      {/* Time Estimates */}
      <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Estimation des temps</h3>
        <div className="space-y-4">
          {timeEstimates.map((estimate) => (
            <div key={estimate.distance} className="flex items-center justify-between">
              <span className="font-medium">{estimate.distance}</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">{estimate.current}</span>
                <span className="text-sm">➔</span>
                <span className="text-emerald-600 font-medium">{estimate.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Records */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h3 className="text-lg font-semibold">Records personnels</h3>
        </div>
        <div className="space-y-4">
          {personalRecords.map((record) => (
            <div key={record.distance} className="flex items-center justify-between">
              <span className="font-medium">{record.distance}</span>
              <div className="text-right">
                <p className="font-medium">{record.time}</p>
                <p className="text-sm text-gray-500">{record.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LevelSection;